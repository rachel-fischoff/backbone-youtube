var appModel = new AppModel();
//assigning Appview to the appModel
var appView = new AppView({
  model: appModel
});
//appModel gets the videos from its collection and fetches the data based on the collection
appModel.get('videos').fetch({
  reset: true,
  //edge cases
  success: (function() {
    alert(' Service request success: ');
  }),
  error: (function(e) {
    alert(' Service request failure: ' + e);
  }),
  complete: (function(e) {
    alert(' Service request completed ');
  })
});
