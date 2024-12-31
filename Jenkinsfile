pipeline {
    agent {
        label 'k8s-slave'
    }

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
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start Dev Server') {
            steps {
                script {
                    sh '''
                        nohup npm run dev > nohup.out 2>&1
                        sleep 30
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    sh '''
                        for i in {1..6}
                        do
                            if curl -f http://localhost:3000/; then
                                echo "Application is running and will remain active!"
                                exit 0
                            fi
                            sleep 10
                        done
                        echo "Application failed to start!"
                        exit 1
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Development server test completed successfully! Application remains running.'
        }
        failure {
            echo 'Development server test failed!'
        }
    }
}
