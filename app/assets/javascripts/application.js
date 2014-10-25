// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .
var DataCoin = function () {
    this.dataName = "Hello Data";
    this.oldData = 0;
    this.newData = 0;
	this.dataArchive = [];
}

DataCoin.prototype.setDataName = function(changedDataName){
	this.dataName = changedDataName;
}
DataCoin.prototype.setOldData = function(changedOldData){
	this.oldData = changedOldData;
}
DataCoin.prototype.setNewData = function(changedNewData){
	this.newData = changedNewData;
}
DataCoin.addFormSection = function(locationReference){
	var formSection = "<form></form>"
	var jQueryItem = $(formSection);
	jQueryItem.attr('id', 'formSection');
	locationReference.append(jQueryItem);
	return jQueryItem;
}
DataCoin.prototype.addInputDataName = function(locationReference){
	var inputDataName = "<input>"
	var jQueryItem = $(inputDataName);
	jQueryItem.attr('id', 'inputDataName');
	jQueryItem.attr('type', 'text');
	jQueryItem.attr('value', 'dfjdkfkdsh');
	locationReference.append(jQueryItem);
	jQueryItem.before("Add New Name Data Here: ");
	jQueryItem.after( "<br>" );
	this.setDataName(jQueryItem.val());
	return jQueryItem;
}
DataCoin.prototype.addInputOldData = function(locationReference){
	var theDataCoin = this;
	var inputOldData = "<input>"
	var jQueryItem = $(inputOldData);
	jQueryItem.attr('id', 'inputOldData');
	jQueryItem.attr('type', 'number');
	jQueryItem.attr('value', '7');
	locationReference.append(jQueryItem);
	jQueryItem.before("Add Old Data Here: ");
	jQueryItem.after( "<br>" );
	theDataCoin.setOldData(jQueryItem.val());
	jQueryItem.change( function() {
		theDataCoin.setOldData(jQueryItem.val());
	});
	return jQueryItem;
}
DataCoin.prototype.addInputNewData = function(locationReference){
	var inputNewData = "<input>"
	var jQueryItem = $(inputNewData);
	jQueryItem.attr('id', 'inputNewData');
	jQueryItem.attr('type', 'number');
	jQueryItem.attr('value', '40');
	locationReference.append(jQueryItem);
	jQueryItem.before("Add New Data Here: ");
	jQueryItem.after( "<br>" );
	this.setNewData(jQueryItem.val());
	return jQueryItem; 
}
DataCoin.prototype.addToArchive = function(newArchiveEntry){
	this.dataArchive.unshift(newArchiveEntry);
}
DataCoin.prototype.removeFromArchive = function(){
	this.dataArchive.shift();
}
DataCoin.prototype.resetArchive = function(){
	this.dataArchive = [];
}
function createDataCoin(){
	var newDataCoin = new DataCoin();
	return newDataCoin;
}
DataCoin.prototype.createDataCoinView = function(jQueryItem) {
	var ourDataCoin = this;
	var newData = "<p></p>";
	var jQNewDataItem = $(newData);
	var oldData = "<p></p>";
	var jQOldDataItem = $(oldData);
	var newName = "<p></p>";
	var jQNewNameItem = $(newName);
	jQueryItem.append(jQNewDataItem);
	jQueryItem.append(jQNewNameItem);
	jQueryItem.append(jQOldDataItem);
	jQNewDataItem.addClass( "data-coin-info" );
	jQNewNameItem.addClass( "data-coin-info" );
	jQOldDataItem.addClass( "data-coin-info" );
	jQNewNameItem.append(ourDataCoin.dataName);
	jQNewDataItem.append(ourDataCoin.newData);
	jQOldDataItem.append(ourDataCoin.oldData);
	return jQueryItem;

}


function dataCoinListener(){
  $("#theForm").empty();
  $("#theContent").empty();
	var formSection = DataCoin.addFormSection($("#theForm"));
	var newDataCoin = new DataCoin();
	var ourDataName = newDataCoin.addInputDataName(formSection);
	var ourOldData = newDataCoin.addInputOldData(formSection);
	var ourNewData = newDataCoin.addInputNewData(formSection);
	var newDiv = "<div></div>";
	var jQueryItem = $(newDiv);
	jQueryItem.addClass( "data-coin" );
	jQueryItem.attr('id', 'coinView');
	$("#theContent").append(jQueryItem);
	var theView = newDataCoin.createDataCoinView(jQueryItem);
	
	ourDataName.change( function () {
		newDataCoin.setDataName(ourDataName.val());
		theView.empty();
		newDataCoin.createDataCoinView(jQueryItem);
	});
	ourOldData.change( function () {
		newDataCoin.setOldData(ourOldData.val());
		theView.empty();
		newDataCoin.createDataCoinView(jQueryItem);
	});
	ourNewData.change( function () {
		newDataCoin.setNewData(ourNewData.val());
		theView.empty();
		newDataCoin.createDataCoinView(jQueryItem);
	});
}

window.onload =  function() {
	$("#addDataCoin").click( function() {
    $("#addDataCoin").addClass("hidden");
		dataCoinListener();
	});
}