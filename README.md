<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/81017eec-d016-4646-92a8-d8408a7d30f6" />



# Enterprise DevSecOps & GitOps Monorepo Platform

An enterprise-grade, cloud-native DevSecOps and GitOps platform featuring fully automated CI/CD safety gating, vulnerability scanning, and declarative continuous delivery.

---

## 🚀 Architecture & Technical Stack

This repository uses a monorepo structure to manage both application source code and its corresponding GitOps deployment configurations, ensuring an immutable and auditable delivery pipeline.

* **Continuous Integration:** [GitHub Actions](https://github.com/features/actions)
* **Static Application Security Testing (SAST):** [SonarCloud](https://sonarcloud.io/)
* **Vulnerability & Container Image Scanning:** [Trivy by Aqua Security](https://aquasecurity.github.io/trivy/)
* **Continuous Delivery & GitOps Engine:** [ArgoCD](https://argoproj.github.io/cd/)
* **Containerization:** Docker

---

## 📂 Repository Structure

```bash
--------------------------------------
├── .github/workflows/      # Automated CI/CD pipelines & DevSecOps security gates
├── app/                     # Application source code (JavaScript & Dockerfile)
└── gitops/my-app/           # Declarative Kubernetes manifests / ArgoCD configurations
🛡️ DevSecOps Pipeline & Safety Gating
--------------------------------------
```
Every code push or pull request triggers a fully automated pipeline designed to catch vulnerabilities and code smells before they hit production:

1.  **Linting & Build:** Validates code quality and ensures the application compiles cleanly.
    
2.  **SAST Gate (SonarCloud):** Analyzes source code for bugs, security vulnerabilities, and code quality hotspots.
    
3.  **Containerization:** Builds an enterprise-ready Docker image from the app/ directory.
    
4.  **Vulnerability Scanning (Trivy):** Scans the built container image for Known Vulnerabilities (CVEs) and Misconfigurations. Infrastructure as Code (IaC) is automatically evaluated.
    
5.  **Quality Gate:** Blocks the deployment if any critical/high vulnerabilities are detected or if SonarCloud quality metrics fail.
    

🔄 GitOps Deployment Workflow
-----------------------------

This platform leverages declarative continuous delivery using **ArgoCD**:

*   Once the CI pipeline successfully passes all safety gates, the application manifest version in gitops/my-app/ is updated.
    
*   ArgoCD continuously monitors the gitops/ directory for configuration drift.
    
*   Any changes made to the Git repository are automatically synchronized and pulled directly into the target Kubernetes cluster, ensuring the cluster's live state perfectly mirrors git truth.
    

🛠️ Getting Started
-------------------

### Prerequisites

*   A GitHub account with secrets configured for your container registry and SonarCloud token.
    
*   An active ArgoCD instance connected to your Kubernetes cluster.
    

### Setup Instructions
```bash
1.  git clone https://github.com/HP04Harsh/enterprise-devsecops-gitops-platform.git

    cd enterprise-devsecops-gitops-platform
   
2.  **Configure CI Secrets:** Add SONAR\_TOKEN, DOCKERHUB\_USERNAME, and DOCKERHUB\_TOKEN to your GitHub Repository Secrets.
    
3.  **ArgoCD Connection:**Point your ArgoCD application definition to track the main branch of this repository under the gitops/my-app/ path.
``` 
