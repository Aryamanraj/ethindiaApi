pragma solidity 0.4.17;

contract Doctor{
    mapping(string => doctorst) doctorlist;
    struct doctorst{
        string doctor_name;
        string doctor_qualification;
        string doctor_contact;
        string doctor_address;
        string doctor_lisense;
    } doctorst d;
    //string[] doctorlist;

    mapping (string=>string) doctorMap;
    function addDoctor(string hashingVal, string _doctor_name, string _doctor_qualification, string _doctor_contact, string _doctor_address, string _doctor_lisense) public {
        d.doctor_name = _doctor_name;
        d.doctor_address = _doctor_address;
        d.doctor_qualification = _doctor_qualification;
        d.doctor_contact = _doctor_contact;
        d.doctor_lisense = _doctor_lisense;

        doctorlist[hashingVal] = d;
    }
    function retrieveList(string hashingVal) public view returns(doctorst){
        
        return doctorlist[hashingVal];
    }
}