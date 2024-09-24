var fs = require("fs"),
    path = require("path"),
    sys = require("sys")
    util = require('util')
    build = require("./build");

var pkg = JSON.parse(fs.readFileSync("package.json")); 
var prefix = pkg.name + "-" + pkg.version;

task('build', [], function (dest) {
  sys.puts("building...");
  util.puts("building...");
  dest = dest || prefix + ".js";
  build.build(dest);
  sys.puts("> " + dest);
  util.puts("> " + dest);
});

task('minify', [], function (file, dest) {
@@ -25,7 +25,7 @@ task('minify', [], function (file, dest) {

  var minified = minify(fs.readFileSync(file, "utf-8"));
  fs.writeFileSync(dest, minified, "utf-8");
  sys.puts("> " + dest)
  util.puts("> " + dest)
});

task('clean', [], function () {
  16 changes: 8 additions & 8 deletions16  
test/runcv.js
Original file line number	Diff line number	Diff line change
@@ -1,4 +1,4 @@
var sys = require("sys"),
var util = require('util'),
    fs = require("fs"),
    path = require("path"),
    url = require("url"),
@@ -17,7 +17,7 @@ function getDocs(couchUrl, callback) {
  var db = getDb(couchUrl);
  db.all({include_docs: true}, function(err, res) {
    if(err)
      sys.puts("error retreiving data from " + couchUrl + ": '" + err + "'");
      util.puts("error retreiving data from " + couchUrl + ": '" + err + "'");
    else {
      var data = _(res.rows).pluck("doc")
      callback(data);
@@ -26,7 +26,7 @@ function getDocs(couchUrl, callback) {
}

function runHCluster(data, options) {
  sys.puts("\nrunning hcluster test on data size: " 
  util.puts("\nrunning hcluster test on data size: " 
     + Math.min(data.length, options.length))

  eval("var distance = " + options.distance);
@@ -39,7 +39,7 @@ function runHCluster(data, options) {
  var clusters = clusterfck.hcluster(items, distance, merge, options.threshold);
  var t2 = Date.now();

  sys.puts("ending cluster count: " + clusters.length);
  util.puts("ending cluster count: " + clusters.length);
  return {
    'time' : t2 - t1,
    'clusters' : clusters
@@ -53,9 +53,9 @@ function runTest(config) {
  getDocs(config.db, function(data) {
    var stats = runHCluster(data, opts);
    if(options.verbose)
      sys.inspect(stats);
      util.inspect(stats);

    sys.puts("running time: " + stats.time + "ms");
    util.puts("running time: " + stats.time + "ms");
    // cvvvvvvvvvvvvvvcvVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV F
    if(options.report) {
      var db = getDb(options.report);
@@ -67,9 +67,9 @@ function runTest(config) {
      }
      db.insert(report, function(err, res) {
        if(err)
          sys.puts("error sending report to " + option.report);
          util.puts("error sending report to " + option.report);
        else
          sys.puts("saved report " + options.report + "/" + res.id);
          util.puts("saved report " + options.report + "/" + res.id);
      }); 
    }
  });
  4 changes: 2 additions & 2 deletions4  
test/visual/runvisual.js
Original file line number	Diff line number	Diff line change
@@ -1,7 +1,7 @@
var connect = require('connect'),
    fs = require("fs"),
    path = require("path"),
    sys = require("sys"),
    util = require('util'),
    build = require("../../build");

var root = path.join(__dirname, "files");
@@ -11,4 +11,4 @@ connect.createServer(
  connect.static(root)
).listen(3000);

sys.puts("visit http://127.0.0.1:3000/vis.html");
util.puts("visit http://127.0.0.1:3000/vis.html");