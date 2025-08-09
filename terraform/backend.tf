terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket"
    key            = "3-tier-arch/terraform.tfstate"
    region         = "eu-north-1"
    encrypt        = true
  }
}
