<?php
/**
*
*/
class Mesa
{
	private $id_mesa;
	private $tipo_mesa;
	private $cantidad_mesa;
	private $precio;
  private $mantel;
  private $precio_mantel;

	function __construct($id_mesa,$tipo_mesa,$cantidad_mesa,$precio,$mantel,$precio_mantel)
	{
		$this->setId_mesa($id_mesa);
  	 $this->setTipo($tipo_mesa);
  	 $this->setCantidad($cantidad_mesa);
  	 $this->setPrecio($precio);
     $this->setMantel($mantel);
     $this->setPrecioMantel($precio_mantel);
	}

	public function getId_mesa(){
		return $this->id_mesa;
	}

	public function setId_mesa($id_mesa){
		$this->id_mesa = $id_mesa;
	}

	public function getTipo(){
		return $this->tipo_mesa;
	}

	public function setTipo($tipo_mesa){
		$this->tipo_mesa = $tipo_mesa;
	}
  public function getCantidad(){
    return $this->cantidad;
  }

  public function setCantidad($cantidad_mesa){
    $this->cantidad = $cantidad_mesa;
  }
	public function getPrecio(){
		return $this->precio;
	}

	public function setPrecio($precio){
		$this->precio = $precio;
	}

	public function getMantel(){

		return $this->mantel;
	}

	public function setMantel($mantel){
      $this->mantel=$mantel
		}
    public function getPrecioMantel(){

      return $this->precio_mantel;
    }

    public function setPrecioMantel($precio_mantel){
        $this->precio_mantel=$precio_mantel
      }
	public static function save($mesa){
		$db=Db::getConnect();
		//var_dump($alumno);
		//die();


		$insert=$db->prepare('INSERT INTO mesas VALUES (NULL,:tipo_mesa,:cantidad,:precio,:mantel,:precio_mantel)');
		$insert->bindValue('tipo_mesa',$mesa->getTipo());
		$insert->bindValue('cantidad',$mesa->getCantidad());
		$insert->bindValue('precio',$mesa->getPrecio());
    $insert->bindValue('mantel',$mantel->getMantel());
    $insert->bindValue('precio_mantel',$precio_mantel->getPrecioMantel());
		$insert->execute();
	}

	public static function all(){
		$db=Db::getConnect();
		$listaMesas=[];

		$select=$db->query('SELECT * FROM mesas order by id_mesa');

		foreach($select->fetchAll() as $mesa){
			$listaMesas[]=new Mesa($mesa['id_mesa'],$tipo_mesa['tipo_mesa'],$cantidad_mesa['cantidad'],$precio['precio'],$mantel['mantel']$precio_mantel['precio_mantel']);
		}
		return $listaMesas;
	}

	public static function searchById($id_mesa){
		$db=Db::getConnect();
		$select=$db->prepare('SELECT * FROM mesas WHERE id_mesa=:id_mesa');
		$select->bindValue('id_mesa',$id_mesa);
		$select->execute();

		$mesas=$select->fetch();


		$mesaDb = new Mesa ($mesaDb['id_mesa'],$mesaDb['tipo_mesa'], $mesaDb['cantidad'], $mesaDb['precio'], $mesaDb['mantel', $mesaDb['precio_mantel']]);
		//var_dump($alumno);
		//die();
		return $mesa;

	}

	public static function update($mesa){
		$db=Db::getConnect();
		$update=$db->prepare('UPDATE mesas SET tipo_mesa=:tipo_mesa,cantidad=:cantidad,precio=:precio,mantel=:mantel,precio_mantel=:precio_mantel WHERE id_mesa=:id_mesa');
    $update->bindValue('tipo_mesa',$mesa->getTipo());
		$update->bindValue('cantidad',$mesa->getCantidad());
		$update->bindValue('precio',$mesa->getPrecio());
    $update->bindValue('mantel',$mantel->getMantel());
    $update->bindValue('precio_mantel',$precio_mantel->getPrecioMantel());
		$update->bindValue('id_mesa',$id_mesa->getId_mesa());
		$update->execute();
	}

	public static function delete($id_mesa){
		$db=Db::getConnect();
		$delete=$db->prepare('DELETE  FROM mesas WHERE id_mesa=:id_mesa');
		$delete->bindValue('id_mesa',$id_mesa);
		$delete->execute();
	}
}

?>
