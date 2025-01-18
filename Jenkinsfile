pipeline {
    agent {
        label 'k8s-slave'
    }

    options {
        timeout(time: 2, unit: 'HOURS')
        disableConcurrentBuilds()
    }

    tools {
        nodejs 'NodeJS'  // Use the default NodeJS tool configuration
    }

    environment {
        NODE_ENV = 'development'
        PORT = '2000'
        DOCKER_IMAGE = 'bandi-bikes-app'
        DOCKER_TAG = 'latest'
        NODE_OPTIONS = '--max-old-space-size=4096'
        NPM_CONFIG_LOGLEVEL = 'verbose'
        DOCKER_BUILDKIT = '1'  // Enable Docker BuildKit
        CONTAINER_NAME = 'bandi-bikes-app'
        DOCKER_NETWORK = 'bandi-network'
        MAX_RETRIES = 6
        HEALTH_CHECK_INTERVAL = 10
        NPM_CONFIG_REGISTRY = 'https://registry.npmjs.org'
        NPM_CONFIG_TIMEOUT = '300000'
        NPM_CONFIG_FETCH_RETRIES = '5'
        NPM_CONFIG_FETCH_RETRY_FACTOR = '2'
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
            options {
                timeout(time: 15, unit: 'MINUTES')
            }
            steps {
                script {
                    try {
                        sh '''
                            # Clean workspace
                            rm -rf node_modules package-lock.json
                            
                            # Configure npm
                            npm config set registry ${NPM_CONFIG_REGISTRY}
                            npm config set fetch-retries ${NPM_CONFIG_FETCH_RETRIES}
                            npm config set fetch-retry-factor ${NPM_CONFIG_FETCH_RETRY_FACTOR}
                            npm config set timeout ${NPM_CONFIG_TIMEOUT}
                            
                            # Install dependencies
                            npm cache clean --force
                            npm install --verbose --no-audit --no-fund || {
                                echo "Retrying with alternative registry..."
                                npm config set registry https://registry.yarnpkg.com
                                npm install --verbose --no-audit --no-fund
                            }
                            
                            # Verify installation
                            if [ ! -d "node_modules" ]; then
                                echo "node_modules directory not found after install"
                                exit 1
                            fi
                            
                            # List installed packages for debugging
                            npm list --depth=0
                        '''
                    } catch (Exception e) {
                        echo """
                            npm installation failed with error: ${e.message}
                            Workspace contents:
                            $(ls -la)
                            Node version: $(node -v)
                            NPM version: $(npm -v)
                            System memory: $(free -h)
                            Disk space: $(df -h)
                        """
                        error "Failed to install dependencies: ${e.message}"
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh '''
                            sudo -u bandi docker build \
                                --no-cache \
                                --build-arg NODE_ENV=${NODE_ENV} \
                                -t ${DOCKER_IMAGE}:${DOCKER_TAG} \
                                -t ${DOCKER_IMAGE}:build-${BUILD_NUMBER} .
                        '''
                    } catch (Exception e) {
                        sh 'sudo -u bandi docker system prune -f'
                        error "Docker build failed: ${e.message}"
                    }
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
                            # Cleanup any existing container
                            sudo -u bandi docker stop ${CONTAINER_NAME} || true
                            sudo -u bandi docker rm ${CONTAINER_NAME} || true
                            
                            # Create network if it doesn't exist
                            sudo -u bandi docker network create ${DOCKER_NETWORK} || true
                            
                            # Run new container
                            sudo -u bandi docker run -d \
                                --name ${CONTAINER_NAME} \
                                --network ${DOCKER_NETWORK} \
                                --restart unless-stopped \
                                -p 2000:2000 \
                                -e NODE_ENV=${NODE_ENV} \
                                -e PORT=${PORT} \
                                -e NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL} \
                                -e NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY} \
                                ${DOCKER_IMAGE}:${DOCKER_TAG}
                        """
                    }
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    sh """
                        COUNTER=0
                        until [ \$COUNTER -eq \$MAX_RETRIES ] || curl -sf http://localhost:2000/
                        do
                            COUNTER=\$((COUNTER+1))
                            echo "Health check attempt \$COUNTER of \$MAX_RETRIES"
                            
                            if [ \$COUNTER -eq \$MAX_RETRIES ]; then
                                echo "Application failed to start after \$MAX_RETRIES attempts"
                                sudo -u bandi docker logs ${CONTAINER_NAME}
                                sudo -u bandi docker stop ${CONTAINER_NAME}
                                sudo -u bandi docker rm ${CONTAINER_NAME}
                                exit 1
                            fi
                            
                            sleep ${HEALTH_CHECK_INTERVAL}
                        done
                        echo "Application is healthy!"
                    """
                }
            }
        }
    }

    post {
        always {
            script {
                sh '''
                    # Cleanup old images
                    sudo -u bandi docker image prune -f
                    # Keep only last 5 builds
                    sudo -u bandi docker images "${DOCKER_IMAGE}" | tail -n +6 | awk '{print $3}' | xargs -r sudo -u bandi docker rmi -f
                '''
            }
            cleanWs()
        }
        success {
            echo 'Application successfully deployed in Docker container!'
        }
        failure {
            echo 'Docker deployment failed!'
        }
        aborted {
            echo 'Pipeline was aborted'
        }
    }
}

