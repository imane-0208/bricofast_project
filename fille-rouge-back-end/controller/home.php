<?php

/**
 * 
 */
class Home
{
	
	function index($page)
	{
		require __DIR__."/../view/".$page.'.php';
	}
}