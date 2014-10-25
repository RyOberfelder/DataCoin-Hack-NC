var DataCoin = function (dataName, oldData, newData) {
    this.dataName = dataName;
    this.oldData = oldData;
    this.newData = newData;
	this.dataArchive = [];
}

DataCoin.setDataName = function(changedDataName){
	this.dataName = changedDataName;
}
DataCoin.setOldData = function(changedOldData){
	this.oldData = changedOldData;
}
DataCoin.setNewData = function(changedNewData){
	this.newData = changedNewData;
}
DataCoin.addFormSection = function(locationReference){
	var formSection = "<form></form>"
	var jQueryItem = $(formSection);
	jQueryItem.attr('id', 'formSection');
	locationReference.append(jQueryItem);
	return jQueryItem;
}
DataCoin.addInputDataName = function(locationReference){
	var inputDataName = "<input>"
	var jQueryItem = $(inputDataName);
	jQueryItem.attr('id', 'inputDataName');
	jQueryItem.attr('type', 'text');
	jQueryItem.attr('value', 'dfjdkfkdsh');
	locationReference.append(jQueryItem);
	jQueryItem.before("Add New Name Data Here: ");
	jQueryItem.after( "<br>" );
	this.dataName = jQueryItem.value;
	return jQueryItem;
}
DataCoin.addInputOldData = function(locationReference){
	var inputOldData = "<input>"
	var jQueryItem = $(inputOldData);
	jQueryItem.attr('id', 'inputOldData');
	jQueryItem.attr('type', 'number');
	jQueryItem.attr('value', '7');
	locationReference.append(jQueryItem);
	jQueryItem.before("Add Old Data Here: ");
	jQueryItem.after( "<br>" );
	this.oldData = jQueryItem.value;
	return jQueryItem;
}
DataCoin.addInputNewData = function(locationReference){
	var inputNewData = "<input>"
	var jQueryItem = $(inputNewData);
	jQueryItem.attr('id', 'inputNewData');
	jQueryItem.attr('type', 'number');
	jQueryItem.attr('value', '40');
	locationReference.append(jQueryItem);
	jQueryItem.before("Add New Data Here: ");
	jQueryItem.after( "<br>" );
	this.newData = jQueryItem.value;
	return jQueryItem; 
}
DataCoin.addToArchive = function(newArchiveEntry){
	this.dataArchive.unshift(newArchiveEntry);
}
DataCoin.removeFromArchive = function(){
	this.dataArchive.shift();
}
DataCoin.resetArchive = function(){
	this.dataArchive = [];
}
function createDataCoin(){
	var newDataCoin = new DataCoin();
	return newDataCoin;
}
DataCoin.prototype.createDataCoinView = function(relativeLocation) {
	var ourDataCoin = this;
	var newDiv = "<div></div>";
	var jQueryItem = $(newDiv);
	var newData = "<p></p>";
	var jQNewDataItem = $(newData);
	var oldData = "<p></p>";
	var jQOldDataItem = $(oldData);
	var newName = "<p></p>";
	var jQNewNameItem = $(newName);
	relativeLocation.append(jQueryItem);
	jQueryItem.append(jQNewDataItem);
	jQueryItem.append(jQNewNameItem);
	jQueryItem.append(jQOldDataItem);
	jQueryItem.addClass( "data-coin" );
	jQNewDataItem.addClass( "data-coin-info" );
	jQNewNameItem.addClass( "data-coin-info" );
	jQOldDataItem.addClass( "data-coin-info" );
	jQNewNameItem.append(ourDataCoin.dataName);
	jQNewDataItem.append(ourDataCoin.newData);
	jQOldDataItem.append(ourDataCoin.oldData);
	return jQueryItem;
}


function dataCoinListener(){
	var formSection = DataCoin.addFormSection($("#try"));
	var ourDataName = DataCoin.addInputDataName(formSection);
	var ourOldData = DataCoin.addInputOldData(formSection);
	var ourNewData = DataCoin.addInputNewData(formSection);
	var newDataCoin = new DataCoin( ourDataName.value,ourNewData.value,ourOldData.value);
	newDataCoin.createDataCoinView($("#try"));
	
}

window.onload =  function() {
	$("#addDataCoin").click( function() {
		dataCoinListener();
	});
}