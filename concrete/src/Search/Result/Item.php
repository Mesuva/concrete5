<?php
namespace Concrete\Core\Search\Result;

use Concrete\Core\Search\Column\Set;

class Item
{
    public $columns = array();

    protected $item;

    public function getColumns()
    {
        return $this->columns;
    }

    public function getItem()
    {
        return $this->item;
    }

    public function __construct(Result $result, Set $columns, $item)
    {
        $this->item = $item;
        foreach ($columns->getColumns() as $col) {
            if ($col) {
                $o = new ItemColumn($col->getColumnKey(), $col->getColumnValue($item), $col);
                $this->columns[] = $o;
            }
        }
    }
}
