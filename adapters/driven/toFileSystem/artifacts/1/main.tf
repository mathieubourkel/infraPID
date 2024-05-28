terraform { 
    required_providers { 
        aws = { 
            source = "hashicorp/aws"
            version = "5.51.1"
        }
        azurerm = {
            source = "hashicorp/azurerm"
            version = "3.105.0"
        }
        google = {
            source = "hashicorp/google"
            version = "5.30.0"
        }
    }
}

provider "aws" {
    region = "eu-west-1"
    clafouti {
        nana = "aaaa"
        nono = "abbb"
    }
}

provider "azurerm" {
    cici = "aa"
}

resource "aws_instance" "aws_instance_infraPID_976920" {
    coucou = "lehibou"
}

resource "aws_instance" "aws_instance_infraPID_260666" {
    coucou = "lehibou"
    coucou2 = "lehibou"
    coucou3 = "lehibou"
    coucou4 {
        caca = "le boa"
    }
}

resource "aws_instance" "aws_instance_infraPID_555555" {
    coucou = "lehibou"
}

