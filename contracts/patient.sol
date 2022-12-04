pragma solidity 0.4.17;

contract Patient{
    mapping(string => patientlt) patientlist;
    struct patientlt{
        string patient_name;
        string patient_dob;
        string patient_contact;
        string patient_address;
    } patientlt p;
    //string[] doctorlist;
    //string[] Outputlisthello;

    mapping (string=>string) patientMap;
    function addPatient(string hashingVal, string patient_name, string patient_dob, string patient_contact, string patient_address) public {
        p.patient_name = patient_name;
        p.patient_dob = patient_dob;
        p.patient_contact = patient_contact;
        p.patient_address = patient_address;

        patientlist[hashingVal] = p;
    }
    function retrievePList(string hashingVal) public view returns(string[] listing){
        
        listing[0] = patientlist[hashingVal].patient_name;
        listing[1] = patientlist[hashingVal].patient_dob;
        listing[2] = patientlist[hashingVal].patient_contact;
        listing[3] = patientlist[hashingVal].patient_address;
        return listing;
    }
}