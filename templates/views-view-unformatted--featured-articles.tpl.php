<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>

<div id="featured-articles">
	<?php
    $max_listed_articles = 3;
    $current_listed_articles = 0; 
    
    $output = '<figure class=main-feature>';
    $output .= '<img src="' . $feature->image . '">';
    $output .= '<figcaption>';
    $output .= '<a href="#">';
    $output .= '<h2>' . $feature->title . '</h2>';
    $output .= '<p>' . $feature->summary . '<span class="more">Full story</span></p>';
    $output .= '</a>';
    $output .= '</figcaption>';
    $output .= '</figure>';
    $output .= '<ol>';
    
    foreach ($articles as $row): 
      if ($current_listed_articles < $max_listed_articles) {
        $output .= '<li>';
        $output .= '<a href="#">';
        $output .= '<figure>';   
        $output .= '<img src="' . $row->image . '">';  
        $output .= '<figcaption>';
        $output .= '<h2>' . $row->title . '</h2>';
        $output .= '<p>' . $row->summary . '<span class="more">Full story</span></p>';
        $output .= '</figcaption>';
        $output .= '</figure>';
        $output .= '</a>';
        $output .= '</li>';
        
        $current_listed_articles ++;
      } else {
        break;
      }
    endforeach;
    
    $output .= '</ol>';
    
    print $output;
	?>
</div>