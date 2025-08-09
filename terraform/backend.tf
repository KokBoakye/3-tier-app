terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket-09-09-2025"
    key            = "terraform.tfstate"
    region         = "eu-north-1"

  }
}
