pipeline {
    agent any
    
    environment{
        NETLIFY_SITE_ID = '175f7d21-f4b9-49cc-939d-b41658e1a7eb'
        NETLIFY_AUTH_TOKEN = credentials('myToken')
    }

    stages {
        stage('Build') {
            agent {
                docker { 
                    image 'node:22.14.0-alpine' 
                    reuseNode true
                }
            }
            
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm install
                    npm run build
                    ls -la
                '''
            }
        }

        stage('Test') {
            agent {
                docker { 
                    image 'node:22.14.0-alpine' 
                    reuseNode true
                }
            }
            
            steps {
                sh '''
                   test -f build/index.html
                   npm test
                '''
            }
        }

        stage('Deploy') {
            agent {
                docker { 
                    image 'node:22.14.0-alpine' 
                    reuseNode true
                }
            }
            
            steps {
                sh '''
                   npm install netlify-cli
                   node_modules/.bin/netlify --version
                   echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
                   node_modules/.bin/netlify status
                   node_modules/.bin/netlify --prod --dir=build
                '''
            }
        }

       
    }
}