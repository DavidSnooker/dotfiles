(function() {
  var OutputView, text;

  OutputView = require('../../lib/views/output-view');

  text = "new line";

  describe("OutputView", function() {
    beforeEach(function() {
      return this.view = new OutputView;
    });
    it("displays a default message", function() {
      return expect(this.view.find('.output').text()).toContain('Nothing');
    });
    it("changes its message when ::addLine is called", function() {
      this.view.addLine(text);
      return expect(this.view.message).toBe(text);
    });
    it("displays the new message when ::finish is called", function() {
      this.view.addLine(text);
      this.view.finish();
      return expect(this.view.find('.output').text()).toBe(text);
    });
    return it("resets to the default message when ::reset is called", function() {
      this.view.addLine(text);
      this.view.reset();
      return expect(this.view.find('.output').text()).toContain('Nothing');
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL2RhdmlkLy5hdG9tL3BhY2thZ2VzL2dpdC1wbHVzL3NwZWMvdmlld3Mvb3V0cHV0LXZpZXctc3BlYy5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsZ0JBQUE7O0FBQUEsRUFBQSxVQUFBLEdBQWEsT0FBQSxDQUFRLDZCQUFSLENBQWIsQ0FBQTs7QUFBQSxFQUVBLElBQUEsR0FBTyxVQUZQLENBQUE7O0FBQUEsRUFHQSxRQUFBLENBQVMsWUFBVCxFQUF1QixTQUFBLEdBQUE7QUFDckIsSUFBQSxVQUFBLENBQVcsU0FBQSxHQUFBO2FBQ1QsSUFBQyxDQUFBLElBQUQsR0FBUSxHQUFBLENBQUEsV0FEQztJQUFBLENBQVgsQ0FBQSxDQUFBO0FBQUEsSUFHQSxFQUFBLENBQUcsNEJBQUgsRUFBaUMsU0FBQSxHQUFBO2FBQy9CLE1BQUEsQ0FBTyxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxTQUFYLENBQXFCLENBQUMsSUFBdEIsQ0FBQSxDQUFQLENBQW9DLENBQUMsU0FBckMsQ0FBK0MsU0FBL0MsRUFEK0I7SUFBQSxDQUFqQyxDQUhBLENBQUE7QUFBQSxJQU1BLEVBQUEsQ0FBRyw4Q0FBSCxFQUFtRCxTQUFBLEdBQUE7QUFDakQsTUFBQSxJQUFDLENBQUEsSUFBSSxDQUFDLE9BQU4sQ0FBYyxJQUFkLENBQUEsQ0FBQTthQUNBLE1BQUEsQ0FBTyxJQUFDLENBQUEsSUFBSSxDQUFDLE9BQWIsQ0FBcUIsQ0FBQyxJQUF0QixDQUEyQixJQUEzQixFQUZpRDtJQUFBLENBQW5ELENBTkEsQ0FBQTtBQUFBLElBVUEsRUFBQSxDQUFHLGtEQUFILEVBQXVELFNBQUEsR0FBQTtBQUNyRCxNQUFBLElBQUMsQ0FBQSxJQUFJLENBQUMsT0FBTixDQUFjLElBQWQsQ0FBQSxDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsSUFBSSxDQUFDLE1BQU4sQ0FBQSxDQURBLENBQUE7YUFFQSxNQUFBLENBQU8sSUFBQyxDQUFBLElBQUksQ0FBQyxJQUFOLENBQVcsU0FBWCxDQUFxQixDQUFDLElBQXRCLENBQUEsQ0FBUCxDQUFvQyxDQUFDLElBQXJDLENBQTBDLElBQTFDLEVBSHFEO0lBQUEsQ0FBdkQsQ0FWQSxDQUFBO1dBZUEsRUFBQSxDQUFHLHNEQUFILEVBQTJELFNBQUEsR0FBQTtBQUN6RCxNQUFBLElBQUMsQ0FBQSxJQUFJLENBQUMsT0FBTixDQUFjLElBQWQsQ0FBQSxDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsSUFBSSxDQUFDLEtBQU4sQ0FBQSxDQURBLENBQUE7YUFFQSxNQUFBLENBQU8sSUFBQyxDQUFBLElBQUksQ0FBQyxJQUFOLENBQVcsU0FBWCxDQUFxQixDQUFDLElBQXRCLENBQUEsQ0FBUCxDQUFvQyxDQUFDLFNBQXJDLENBQStDLFNBQS9DLEVBSHlEO0lBQUEsQ0FBM0QsRUFoQnFCO0VBQUEsQ0FBdkIsQ0FIQSxDQUFBO0FBQUEiCn0=

//# sourceURL=/Users/david/.atom/packages/git-plus/spec/views/output-view-spec.coffee
