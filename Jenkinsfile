pipeline {
    agent any

    tools {
        nodejs 'NodeJS'  // Configure this in Jenkins Global Tool Configuration
    }

    environment {
        NODE_ENV = 'development'
        PORT = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Node Setup') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start Dev Server') {
            steps {
                script {
                    bat '''
                        start /B npm run dev
                        @echo off
                        timeout /t 30 /nobreak
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    bat '''
                        @echo off
                        for /l %%x in (1, 1, 6) do (
                            curl -f http://localhost:3000/
                            if !errorlevel! equ 0 (
                                echo Application is running!
                                exit /b 0
                            )
                            timeout /t 10 /nobreak
                        )
                        echo Application failed to start!
                        exit /b 1
                    '''
                }
            }
        }
    }

    post {
        always {
            script {
                bat '''
                    @echo off
                    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do taskkill /F /PID %%a
                '''
            }
        }
        success {
            echo 'Development server test completed successfully!'
        }
        failure {
            echo 'Development server test failed!'
        }
    }
}