// The BloomFilter contstructor expects 2 things; m, which is the number of
// positions in the filter data set, and an array of hashing functions.
var BloomFilter = function(m, hashingFunctions) {
  // The bit array object that holds the results of the bloom filter hashing
  // should go under the property _storage.
  this._storage=new BitArray(18);


  // Don't forget to grab the parameters from the constructor call and assign
  // them!
};

// Your methods go here! Good luck!
BloomFilter.prototype.add=function(k){
	var i1=hashingFunctions[0](18,k);
	var i2=hashingFunctions[1](18,k);
	var i3=hashingFunctions[2](18,k);

	this._storage[i1]=true;
	this._storage[i2]=true;
	this._storage[i3]=true;

};

BloomFilter.prototype.test=function(k){
	var i1=hashingFunctions[0](18,k);
	var i2=hashingFunctions[1](18,k);
	var i3=hashingFunctions[2](18,k);

	if(this._storage[i1] && this._storage[i2] && this._storage[i3]){
		return true
	}else{
		return false;
	}

};

