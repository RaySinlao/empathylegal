$('input[name=phone]').mask('+19999999999');
$('input[name=phone]').on('focus', function () {
    if ($(this).val().length === 0) {
        $(this).val('+1');
    }
});

var sub1 = getUrlParameter('sub1') || '';
var sub2 = getUrlParameter('sub2') || '';
var sub3 = getUrlParameter('sub3') || '';
var sub4 = getUrlParameter('sub4') || '';
var sub5 = getUrlParameter('sub5') || '';
var affid = getUrlParameter('affid') || '';
var ip_address;


$.getJSON('https://api.ipify.org?format=json', function(data) {
    ip_address = data.ip;
});


function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

$('.back-btn').click(function(){
    let $parent = $(this).parent().parent().parent()
    let countquiz =  $(".p-count span").text()
    let percent = $parent.prev().attr('data-percent');

    $(".p-count span").text(countquiz - 1)
    $(".progress-wrap span").css({ width: percent + '%' })
    
    $parent.fadeOut(function(){
        $parent.prev().fadeIn()
    })  
})

$('.next-btn').click(function(){
    let $parent = $(this).parent().parent().parent()
    let countquiz = $parent.attr('data-count');
    let percent = $parent.attr('data-percent');
    let isValid = true;

    if ($parent.find('input[type="checkbox"]').length > 0) {
        if ($parent.find('input[type="checkbox"]:checked').length === 0) {
            $parent.find('label').addClass('is-invalid');
            setTimeout(() => { $parent.find('label').removeClass('is-invalid') }, 1000)
            isValid = false;
        }
    }

    $parent.find('input[type="radio"]').each(function() {
        let radioName = $(this).attr('name'); // Get the name attribute of the radio group
        if ($parent.find('input[name="' + radioName + '"]:checked').length === 0) {
            $parent.find('label').addClass('is-invalid');
            setTimeout(() => { $parent.find('label').removeClass('is-invalid') }, 1000)
            isValid = false; // No radio button selected in the group
        }
    });

    $parent.find('select').each(function() {
        if ($(this).val() === '') {
            $parent.find('select').addClass('is-invalid');
            isValid = false;
        }else{
            $parent.find('select').removeClass('is-invalid');
        }
    });

    // if ($parent.find('input[type="checkbox"]:checked').length === 0) {
    //     $parent.find('label').addClass('is-invalid');
    //     $parent.find('input[type="checkbox"]').addClass('is-invalid');
    //     setTimeout(() => {
    //         $parent.find('label').removeClass('is-invalid')
    //         $parent.find('input[type="checkbox"]').removeClass('is-invalid');
    //     }, 1000)
    //     isValid = false
    // }else{
    //     $parent.find('label').removeClass('is-invalid');
    //     $parent.find('input[type="checkbox"]').removeClass('is-invalid');
    // }
    

    $parent.find('input[type="text"], input[type="email"]').each(function() {
        if ( $(this).val().trim() === '' ) {
            $parent.find('input[type="text"]').addClass('is-invalid');
            $parent.find('input[type="email"]').addClass('is-invalid');
            isValid = false;
        } else {
            isValid = true;
            $parent.find('input[type="text"]').removeClass('is-invalid');
            $parent.find('input[type="email"]').removeClass('is-invalid');
        }
    });

    if(!isValid) return;

    $(".p-count span").text(countquiz)
    $(".progress-wrap span").css({ width: percent + '%' })
    $(".p-count").show()

    $parent.fadeOut(function(){
        $parent.next().fadeIn()
    })
}) 

$(".submit-btn").click(function(){


    if ( $(".summary").val().trim() === '' ) {
        $('.summary').addClass('is-invalid');
        return false;
    }

    
    $(".submit-btn span").hide()
    $(".loaderSpin").show()

    submitData()

    setTimeout(() =>  window.location.href = "./thank-you.html" , 1500)
   
})

function submitData(){
    let apiUrl = 'https://hook.us1.make.com/2m182g93jd9kb8t2acimlv6liynaxwot';
    let abuse_assault = $('input[name="abuse_assault"]:checked').val()
    let firstName = $("input[name=first_name]").val();
    let lastName = $("input[name=last_name]").val();
    let phone = $("input[name=phone]").val();
    let email = $("input[name=email]").val();
    let service = $("input[name=service]:checked").val();
    let access = $("input[name=access]:checked").val();
    let policeReport = $("input[name=preport]:checked").val();
    let attorney = $("input[name=attorney]:checked").val();
    let lawyer = $("input[name=lawyer]:checked").val();
    let gender = $("input[name=gender]:checked").val();
    let state = $("select[name=state]").val();
    let injury_timeframe = $("select[name=injury_timeframe]").val();
    let assaultYear = $("input[name=assault]:checked").val();
    let diDay = $("select[name=day]").val();
    let diMonth = $("select[name=month]").val();
    let diYear = $("select[name=year]").val();
    let dobDay = $("select[name=dob-day]").val();
    let dobMonth = $("select[name=dob-month]").val();
    let dobYear = $("select[name=dob-year]").val();
    let summary = $("input[name=summary]").val();
    let TFCertUrl = $("input[name=xxTrustedFormCertUrl]").val()
    let TFCertId = TFCertUrl.match(/([^\/]+)$/)[0];

    let dateIncident = diYear+ '-' + diMonth + '-' + diDay
    let dob =  dobYear + '-' + dobMonth + '-' + dobDay
    let phoneNumber = phone.replace("+1", "");

    const data = {
        first_name: firstName,
        last_name: lastName,
        phone: phoneNumber,
        email: email,
        service_when_assault_occurred: service,
        exp_as: abuse_assault,
        access_account_booked: access,
        police_report: policeReport,
        attorney: attorney,
        lawyer: lawyer,
        gender: gender,
        state: state,
        injury_timeframe: injury_timeframe,
        assault_year: assaultYear,
        incident_date: dateIncident,
        date_of_birth: dob,
        summary: summary,
        trusted_form_cert: TFCertId,
        affid: affid,
        ip: ip_address,
        sub1: sub1,
        sub2: sub2,
        sub3: sub3,
        sub4: sub4,
        sub5: sub5,
        offer: 'ride-share-abuse'
    }
    const queryString = new URLSearchParams(data).toString();
    const options = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(`${apiUrl}?${queryString}`, options)
        .then(response => response.text())
        .then(() => {
            console.log('Success!')
        })
        .catch(err => console.error(err));
}
