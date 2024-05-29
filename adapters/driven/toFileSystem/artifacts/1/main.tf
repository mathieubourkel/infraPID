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

resource "aws_instance" "aws_instance_infraPID_79817" {
    coucou = "aa"
}

resource "aws_instance" "aws_instance_infraPID_328102" {
    coucou = "aa"
    coucou2 = "bb"
    coucou3 = "cc"
    coucou4 {
        coucou5 = "dd"
    }
}

resource "aws_instance" "aws_instance_infraPID_444793" {
    coucou = "aa"
}

