<?php
	if (isset($_POST['submit_cpap'])) {
		$First_Name = validate_field($_POST["First_Name"]);
		$Last_Name = validate_field($_POST["Last_Name"]);
		$Email = validate_field($_POST["Email"]);
		$Telephone = validate_field($_POST["Telephone"]);
		$CPAP = validate_field($_POST["CPAP"]);
		$Cancer = validate_field($_POST["Cancer"]);
		$length_use = validate_field($_POST["length_use"]);
		$represented = validate_field($_POST["represented"]);

		$mapped = array();
		$mapped['apiId'] = '52696FFFECA44C068F2EE48A2D76D323';
		$mapped['apiPassword'] = 'b8e4ff389';
		$mapped['productId'] = '197';
		$mapped['price'] = '15';
		$mapped['trustedFormURL'] = '';
		$mapped['jornayaLeadId'] = '';
		$mapped['email'] = $Email;
		$mapped['phoneNumber'] = $Telephone;
		$mapped['firstName'] = $First_Name;
		$mapped['lastName'] = $Last_Name;
		$mapped['cancer'] = $Cancer;
		$mapped['cpap'] = $CPAP;
		$mapped['clickid'] = '';
		$mapped['tPar'] = '';
		$mapped['attorney'] = $represented;
		$mapped['notes'] = $length_use;
		$mapped['source'] = 'http://empathylegal.com';
		$server_url = "https://leads-inst286-client.phonexa.com/lead/";

		$ch = curl_init($server_url);

		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $mapped);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array("Expect:"));
		curl_setopt($ch, CURLOPT_FAILONERROR, 1);
		curl_setopt($ch, CURLOPT_HEADER, 0); // 1
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // true
		curl_setopt($ch, CURLOPT_TIMEOUT, 120);
		curl_setopt($ch, CURLINFO_HEADER_OUT, true);
		curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);

		if (curl_errno($ch)) {
			// Error
		} else {
			// Send Success
			$Response = curl_exec($ch);
			curl_close($ch);

			header("Location: https://thanks.injurysurvey.com/");
			die();
		}
	}

	if (isset($_POST['submit_hurricane'])) {
		$First_Name = validate_field($_POST["First_Name"]);
		$Last_Name = validate_field($_POST["Last_Name"]);
		$Email_Address = validate_field($_POST["Email_Address"]);
		$Phone_Number = validate_field($_POST["Phone_Number"]);
		$Type_of_Damage = validate_field($_POST["Type_of_Damage"]);
		$Damage_Description = validate_field($_POST["Damage_Description"]);
		$Have_Insurance = validate_field($_POST["Have_Insurance"]);
		$State = validate_field($_POST["State"]);

		$mapped = array();
		$mapped['apiId'] = '745E04DD7B5B401E800DC89C488860C4';
		$mapped['apiPassword'] = '3c93735';
		$mapped['productId'] = '196';
		$mapped['price'] = '15';
		$mapped['trustedFormURL'] = 'https://cert.trustedform.com/53de80fad97f562774a6d93d11a4452e3e0b5c2f';
		$mapped['jornayaLeadId'] = '';
		$mapped['email'] = $Email_Address;
		$mapped['phoneNumber'] = $Phone_Number;
		$mapped['firstName'] = $First_Name;
		$mapped['lastName'] = $Last_Name;
		$mapped['criteria1'] = 'What primary type of damage occurred to your property? ' . $Type_of_Damage;
		$mapped['criteria2'] = 'What best describes your damage loss? ' . $Damage_Description;
		$mapped['criteria3'] = 'Do you have Homeowners Insurance? ' . $Have_Insurance;
		$mapped['userIp'] = '';
		$mapped['clickid'] = '';
		$mapped['tPar'] = '';
		$mapped['source'] = 'http://empathylegal.com';
		$server_url = "https://leads-inst286-client.phonexa.com/lead/";

		$ch = curl_init($server_url);

		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $mapped);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array("Expect:"));
		curl_setopt($ch, CURLOPT_FAILONERROR, 1);
		curl_setopt($ch, CURLOPT_HEADER, 0); // 1
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // true
		curl_setopt($ch, CURLOPT_TIMEOUT, 120);
		curl_setopt($ch, CURLINFO_HEADER_OUT, true);
		curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);

		if (curl_errno($ch)) {
			// Error
		} else {
			// Send Success
			$Response = curl_exec($ch);
			curl_close($ch);

			header("Location: https://www.disaster-claims.com/submitted");
			die();
		}
	}

	function validate_field($data) {
	  	$data = trim($data);
	  	$data = stripslashes($data);
	  	$data = htmlspecialchars($data);

	  	return $data;
	}
?>
