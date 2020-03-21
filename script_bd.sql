-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema corona_bd
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema corona_bd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `corona_bd` DEFAULT CHARACTER SET utf8 ;
USE `corona_bd` ;

-- -----------------------------------------------------
-- Table `corona_bd`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `corona_bd`.`usuario` ;

CREATE TABLE IF NOT EXISTS `corona_bd`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `telefone` VARCHAR(11) NOT NULL,
  `senha` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `telefone_UNIQUE` (`telefone` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `corona_bd`.`perfil`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `corona_bd`.`perfil` ;

CREATE TABLE IF NOT EXISTS `corona_bd`.`perfil` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `idade` INT(2) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  `genero` VARCHAR(1) NOT NULL,
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_id_usuario_1_idx` (`id_usuario` ASC),
  CONSTRAINT `fk_id_usuario_1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `corona_bd`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `corona_bd`.`sintomas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `corona_bd`.`sintomas` ;

CREATE TABLE IF NOT EXISTS `corona_bd`.`sintomas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `corona_bd`.`consultas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `corona_bd`.`consultas` ;

CREATE TABLE IF NOT EXISTS `corona_bd`.`consultas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_hora` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `teve_febre` TINYINT(1) NOT NULL,
  `id_contulta_para_sintomas` INT NOT NULL,
  `tomou_medicamento` TINYINT(1) NOT NULL DEFAULT 0,
  `melhorou_apos_medicamento` TINYINT(1) NOT NULL,
  `contato_alguem_corona` TINYINT(1) NOT NULL,
  `viagem_internaciona` TINYINT(1) NOT NULL DEFAULT 0,
  `outros_sintomas` TINYINT(1) NOT NULL,
  `gravidez` TINYINT(1) NOT NULL DEFAULT 0,
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_consultas_1_idx` (`id_usuario` ASC),
  CONSTRAINT `fk_consultas_1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `corona_bd`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `corona_bd`.`consulta_para_sintomas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `corona_bd`.`consulta_para_sintomas` ;

CREATE TABLE IF NOT EXISTS `corona_bd`.`consulta_para_sintomas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_consulta` INT NOT NULL,
  `id_sintoma` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_consulta_para_sintomas_1_idx` (`id_sintoma` ASC),
  INDEX `fk_consulta_para_sintomas_2_idx` (`id_consulta` ASC),
  CONSTRAINT `fk_consulta_para_sintomas_1`
    FOREIGN KEY (`id_sintoma`)
    REFERENCES `corona_bd`.`sintomas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consulta_para_sintomas_2`
    FOREIGN KEY (`id_consulta`)
    REFERENCES `corona_bd`.`consultas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
