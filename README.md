name: Artifactory Upload & Download

on:
  push:
    branches:
      - main

jobs:
  upload-download:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Install JFrog CLI
        run: |
          curl -fL https://install-cli.jfrog.io | sh
          mv jfrog /usr/local/bin/

      - name: Configure JFrog CLI
        run: |
          jfrog config add artifactory \
            --artifactory-url=https://your-artifactory-instance.jfrog.io/artifactory \
            --user=${{ secrets.ARTIFACTORY_USER }} \
            --password=${{ secrets.ARTIFACTORY_PASSWORD }} \
            --interactive=false

      - name: Upload Artifact to Artifactory
        run: |
          jfrog rt upload "path/to/local/file.zip" "your-repo/path/in/artifactory/"

      - name: Download Artifact from Artifactory
        run: |
          jfrog rt download "your-repo/path/in/artifactory/file.zip" "path/to/save/
    pipeline {
    agent any

    environment {
        ARTIFACTORY_URL = "https://your-artifactory-instance.jfrog.io/artifactory"
        ARTIFACTORY_REPO = "your-repo/path/in/artifactory/"
        ARTIFACTORY_USER = credentials('ARTIFACTORY_USER')
        ARTIFACTORY_PASSWORD = credentials('ARTIFACTORY_PASSWORD')
    }

    stages {
        stage('Install JFrog CLI') {
            steps {
                sh 'curl -fL https://install-cli.jfrog.io | sh'
                sh 'mv jfrog /usr/local/bin/'
            }
        }

        stage('Configure JFrog CLI') {
            steps {
                sh 'jfrog config add artifactory --artifactory-url=${ARTIFACTORY_URL} --user=${ARTIFACTORY_USER} --password=${ARTIFACTORY_PASSWORD} --interactive=false'
            }
        }

        stage('Upload Artifact') {
            steps {
                sh 'jfrog rt upload "path/to/local/file.zip" "$ARTIFACTORY_REPO"'
            }
        }

        stage('Download Artifact') {
            steps {
                sh 'jfrog rt download "$ARTIFACTORY_REPO/file.zip" "path/to/save/"'
            }
        }
    }
}
