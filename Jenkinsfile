pipeline {
    agent {
        label 'k8s-slave'
    }

    tools {
        nodejs 'NodeJS'  // Configure this in Jenkins Global Tool Configuration
    }

    environment {
        NODE_ENV = 'development'
        PORT = '2000'
        DOCKER_IMAGE = 'bandi-bikes-app'
        DOCKER_TAG = 'latest'
        SUPABASE_CREDS = credentials([
            string(credentialsId: 'NEXT_PUBLIC_SUPABASE_URL', variable: 'NEXT_PUBLIC_SUPABASE_URL'),
            string(credentialsId: 'NEXT_PUBLIC_SUPABASE_ANON_KEY', variable: 'NEXT_PUBLIC_SUPABASE_ANON_KEY')
        ])
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

        stage('Build Docker Image') {
            steps {
                script {
                    sh """
                        sudo -u bandi docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'NEXT_PUBLIC_SUPABASE_URL', variable: 'NEXT_PUBLIC_SUPABASE_URL'),
                        string(credentialsId: 'NEXT_PUBLIC_SUPABASE_ANON_KEY', variable: 'NEXT_PUBLIC_SUPABASE_ANON_KEY')
                    ]) {
                        sh """
                            sudo -u bandi docker stop ${DOCKER_IMAGE} || true
                            sudo -u bandi docker rm ${DOCKER_IMAGE} || true
                            sudo -u bandi docker run -d \
                                --name ${DOCKER_IMAGE} \
                                -p 2000:2000 \
                                -e NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL} \
                                -e NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY} \
                                ${DOCKER_IMAGE}:${DOCKER_TAG}
                            sleep 30
                        """
                    }
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    sh '''
                        for i in {1..6}
                        do
                            if curl -f http://localhost:2000/; then
                                echo "Docker container is running and application is accessible!"
                                exit 0
                            fi
                            sleep 10
                        done
                        echo "Application failed to start in container!"
                        exit 1
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Application successfully deployed in Docker container!'
        }
        failure {
            echo 'Docker deployment failed!'
        }
    }
}

