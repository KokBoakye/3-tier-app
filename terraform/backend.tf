terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket-09-09-2025"
    key            = "/Users/kwabena/Desktop/Projects/3-tier-app/terraform.tfstate"
    region         = "eu-north-1"
    encrypt        = true
  }
}
