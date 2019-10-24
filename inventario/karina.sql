-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Administrador` (
  `Usuario` INT NOT NULL,
  `Contraseña` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`Usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Loza`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Loza` (
  `idLoza` INT NOT NULL,
  `cantidad_platoHondo` INT NOT NULL,
  `cantidad_platon` INT NOT NULL,
  `cantidad_vaso` INT NOT NULL,
  `cantidad_cuchara` INT NOT NULL,
  `precio` DOUBLE NULL,
  PRIMARY KEY (`idLoza`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Mesa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Mesa` (
  `idMesa` INT NOT NULL,
  `TipoMesa` VARCHAR(45) NOT NULL,
  `Cantidad` INT NOT NULL,
  `Precio` DOUBLE NOT NULL,
  `Cubremantel` INT NULL,
  `MantelPrecio` DOUBLE NULL,
  PRIMARY KEY (`idMesa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Contacto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Contacto` (
  `idContacto` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `ApellidoP` VARCHAR(20) NOT NULL,
  `ApellidoM` VARCHAR(20) NULL,
  `Correo` VARCHAR(45) NOT NULL,
  `Telefono` INT NOT NULL,
  `Asunto` VARCHAR(45) NOT NULL,
  `Mensaje` VARCHAR(45) NULL,
  PRIMARY KEY (`idContacto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Silla`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Silla` (
  `idSilla` INT NOT NULL,
  `Cantidad` INT NOT NULL,
  `Precio` DOUBLE NOT NULL,
  `Cubresilla` INT NOT NULL,
  `PrecioCS` DOUBLE NOT NULL,
  PRIMARY KEY (`idSilla`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Comida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Comida` (
  `idComida` INT NOT NULL,
  `Tipo de paquete` VARCHAR(45) NOT NULL,
  `Precio` DOUBLE NOT NULL,
  PRIMARY KEY (`idComida`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Salon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Salon` (
  `idSalon` INT NOT NULL,
  `Colonia` VARCHAR(30) NOT NULL,
  `Calle` VARCHAR(30) NOT NULL,
  `No` VARCHAR(15) NOT NULL,
  `Telefono` INT NOT NULL,
  `Precio` DOUBLE NOT NULL,
  `Nombre_Salon` VARCHAR(30) NOT NULL,
  `Nombre_Contacto` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`idSalon`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Entretenimiento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Entretenimiento` (
  `idEntretenimiento` INT NOT NULL,
  `Cantidad-Brincolin` INT NOT NULL,
  `Cantidad-Inflable` INT NOT NULL,
  `Precio-Brincolin` DOUBLE NOT NULL,
  `Precio-Inflable` DOUBLE NOT NULL,
  PRIMARY KEY (`idEntretenimiento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Evento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Evento` (
  `idEvento` INT NOT NULL,
  `idCotizar` INT NOT NULL,
  `Fecha` DATE NULL,
  `Calle` VARCHAR(45) NULL,
  `Colonia` VARCHAR(30) NULL,
  `No` VARCHAR(15) NULL,
  PRIMARY KEY (`idEvento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cotizar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cotizar` (
  `idCotizar` INT NOT NULL,
  `Precio-Total` INT NOT NULL,
  `idContacto` INT NOT NULL,
  `idEntretenimiento` INT NOT NULL,
  `idComida` INT NOT NULL,
  `idLoza` INT NOT NULL,
  `idMesa` INT NOT NULL,
  `idSalon` INT NOT NULL,
  `idSillas` INT NOT NULL,
  `idEvento` INT NULL,
  PRIMARY KEY (`idCotizar`),
  INDEX `comida_idx` (`idComida` ASC),
  INDEX `contacto_idx` (`idContacto` ASC),
  INDEX `loza_idx` (`idLoza` ASC),
  INDEX `salon_idx` (`idSalon` ASC),
  INDEX `mesa_idx` (`idMesa` ASC),
  INDEX `entretenimiento_idx` (`idEntretenimiento` ASC),
  INDEX `evento_idx` (`idEvento` ASC),
  INDEX `silla_idx` (`idSillas` ASC),
  CONSTRAINT `comida`
    FOREIGN KEY (`idComida`)
    REFERENCES `mydb`.`Comida` (`idComida`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `contacto`
    FOREIGN KEY (`idContacto`)
    REFERENCES `mydb`.`Contacto` (`idContacto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `loza`
    FOREIGN KEY (`idLoza`)
    REFERENCES `mydb`.`Loza` (`idLoza`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `salon`
    FOREIGN KEY (`idSalon`)
    REFERENCES `mydb`.`Salon` (`idSalon`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `mesa`
    FOREIGN KEY (`idMesa`)
    REFERENCES `mydb`.`Mesa` (`idMesa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `entretenimiento`
    FOREIGN KEY (`idEntretenimiento`)
    REFERENCES `mydb`.`Entretenimiento` (`idEntretenimiento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `evento`
    FOREIGN KEY (`idEvento`)
    REFERENCES `mydb`.`Evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `silla`
    FOREIGN KEY (`idSillas`)
    REFERENCES `mydb`.`Silla` (`idSilla`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Musica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Musica` (
  `idMusica` INT NOT NULL,
  `Tipo_servicio` VARCHAR(45) NOT NULL,
  `Precio_hora` DOUBLE NOT NULL,
  PRIMARY KEY (`idMusica`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Detalle-musica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Detalle-musica` (
  `idDetalle-musica` INT NOT NULL,
  `Horas` DOUBLE NOT NULL,
  `idMusica` INT NOT NULL,
  `idCotizar` INT NOT NULL,
  PRIMARY KEY (`idDetalle-musica`),
  INDEX `m_idx` (`idMusica` ASC),
  INDEX `cotizae_idx` (`idCotizar` ASC),
  CONSTRAINT `m`
    FOREIGN KEY (`idMusica`)
    REFERENCES `mydb`.`Musica` (`idMusica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cotizae`
    FOREIGN KEY (`idCotizar`)
    REFERENCES `mydb`.`Cotizar` (`idCotizar`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
