	<html>
	<body>
	<h4>This is a list of famous people sharing your birthday!</h4>
    <?php 

        $date = $_POST['date'];
        list($month, $day, $year) =explode("/",$date);
        
        switch($month) {
                case 01 :
	                    $monthName = "january";
	                    break;
                case 02 :
	                    $monthName = "february";
	                    break;
                case 03 :
	                    $monthName = "march";
	                    break;
                case 04 :
	                    $monthName = "april";
	                    break;
                case 05 :
	                    $monthName = "may";
	                    break;
                case 06 :
	                    $monthName = "june";
	                    break;
                case 07 :
	                    $monthName = "july";
	                    break;
                case 08 :
	                    $monthName = "august";
	                    break;
                case 09 :
	                    $monthName = "september";
	                    break;
                case 10 :
	                    $monthName = "october";
	                    break;
                case 11 :
	                    $monthName = "november";
	                    break;
                case 12 :
	                    $monthName = "december";
	                    break;
	                     
	                default :
	                    echo "Sorry";
	                    break;         
	            }
     echo "<a href=\"http://www.biography.com/people/groups/born-on-" . $monthName . "-" .$day . "\"> Click this</a>" ;
       
 ?>
	</body>
	</html>
