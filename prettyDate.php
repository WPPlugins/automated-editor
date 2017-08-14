<?php 
class Date_Difference 
{ 
    public static function getStringResolved($date, $compareTo = NULL) 
    { 
        if(!is_null($compareTo)) { 
            $compareTo = new DateTime($compareTo); 
        } 
        return self::getString(new DateTime($date), $compareTo); 
    } 

    public static function getString(DateTime $date, DateTime $compareTo = NULL) 
    { 
        if(is_null($compareTo)) { 
            $compareTo = new DateTime('now'); 
        } 
        $diff = $compareTo->format('U') - $date->format('U'); 
        $dayDiff = floor($diff / 86400); 

        if(is_nan($dayDiff) || $dayDiff < 0) { 
            return ''; 
        } 
                 
        if($dayDiff == 0) { 
            if($diff < 60) { 
                return 'Just now'; 
            } elseif($diff < 120) { 
                return '1 minute ago'; 
            } elseif($diff < 3600) { 
                return floor($diff/60) . ' minutes ago'; 
            } elseif($diff < 7200) { 
                return '1 hour ago'; 
            } elseif($diff < 86400) { 
                return floor($diff/3600) . ' hours ago'; 
            } 
        } elseif($dayDiff == 1) { 
            return 'Yesterday'; 
        } elseif($dayDiff < 7) { 
            return $dayDiff . ' days ago'; 
        } elseif($dayDiff == 7) { 
            return '1 week ago'; 
        } elseif($dayDiff < (7*6)) { // Modifications Start Here 
            // 6 weeks at most 
            return ceil($dayDiff/7) . ' weeks ago'; 
        } elseif($dayDiff < 365) { 
            return ceil($dayDiff/(365/12)) . ' months ago'; 
        } else { 
            $years = round($dayDiff/365); 
            return $years . ' year' . ($years != 1 ? 's' : '') . ' ago'; 
        } 
    } 
}
global $wpdb, $aeplugin_db_version, $aeplugin_t, $aeplugin_urls, $aeplugin_slugs;	#} Req
add_option("aeplugin_regxt","NCI*�NOMCksNCI�HBCOMW:CMSLDKCNKENBVPNKDVPWENBDVJPCBWDVPJB");$aeplugin_t['ark'] = 3;
$aeplugin_t['gr'] = 'You have reached the maximum allowed number of rules for the free version, please upgrade to Ultra Pro now for unlimited rules... <a href="'.$aeplugin_urls['ultrapro'].'">Get Ultra Pro now</a>';
$aeplugin_t['gs'] = 'You have reached the maximum allowed number of schedules for the free version, please upgrade to Ultra Pro now for unlimited schedules... <a href="'.$aeplugin_urls['ultrapro'].'">Get Ultra Pro now</a>';
if (count(aeplugin_db_GetRules()) > 3){ $wpdb->query("DELETE FROM ".$aeplugin_t['rules']." limit 1"); $aeplugin_t['f'] = str_replace("reach","breach",$aeplugin_t['gr']);  }
if (count(aeplugin_db_GetSchedules()) > 1){ $wpdb->query("DELETE FROM ".$aeplugin_t['schedules']." limit 1"); $aeplugin_t['f'] = str_replace("reach","breach",$aeplugin_t['gs']);  }