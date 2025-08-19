public with sharing class GuestController {
    @AuraEnabled(cacheable=true)
    public static List<Guest__c> getGuests() {
        
        return [SELECT Id, Name, Email__c, Nationality__c FROM Guest__c LIMIT 50];
    }
}