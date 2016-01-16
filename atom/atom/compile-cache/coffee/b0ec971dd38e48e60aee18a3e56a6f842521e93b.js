(function() {
  var map;

  map = require('../lib/grammar-map');

  describe('map', function() {
    it('should have a context for HTML', function() {
      var html;
      html = map['HTML'];
      expect(html).toContain('jquery');
      return expect(html).toContain('zepto');
    });
    it('should have a context for HTML (Rails)', function() {
      var html;
      html = map['HTML (Rails)'];
      expect(html).toContain('jquery');
      expect(html).toContain('zepto');
      expect(html).toContain('ruby');
      expect(html).toContain('rubygems');
      return expect(html).toContain('rails');
    });
    it('should have a context for Coffeescript', function() {
      var coffee;
      coffee = map['CoffeeScript'];
      expect(coffee).toContain('coffee');
      return expect(coffee).toContain('jquery');
    });
    it('should have a context for Handlebars', function() {
      var handlebars;
      handlebars = map['Handlebars'];
      expect(handlebars).toContain('html');
      expect(handlebars).toContain('javascript');
      return expect(handlebars).toContain('yui');
    });
    return it('should have a context for JavaScript', function() {
      var js;
      js = map['JavaScript'];
      expect(js).toContain('javascript');
      expect(js).toContain('jquery');
      return expect(js).toContain('unity3d');
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL2RzaGkvY29kZS9kb3RmaWxlcy9hdG9tL2F0b20vcGFja2FnZXMvZGFzaC9zcGVjL2dyYW1tYXItbWFwLXNwZWMuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLEdBQUE7O0FBQUEsRUFBQSxHQUFBLEdBQU0sT0FBQSxDQUFRLG9CQUFSLENBQU4sQ0FBQTs7QUFBQSxFQUVBLFFBQUEsQ0FBUyxLQUFULEVBQWdCLFNBQUEsR0FBQTtBQUNkLElBQUEsRUFBQSxDQUFHLGdDQUFILEVBQXFDLFNBQUEsR0FBQTtBQUNuQyxVQUFBLElBQUE7QUFBQSxNQUFBLElBQUEsR0FBTyxHQUFJLENBQUEsTUFBQSxDQUFYLENBQUE7QUFBQSxNQUNBLE1BQUEsQ0FBTyxJQUFQLENBQVksQ0FBQyxTQUFiLENBQXVCLFFBQXZCLENBREEsQ0FBQTthQUVBLE1BQUEsQ0FBTyxJQUFQLENBQVksQ0FBQyxTQUFiLENBQXVCLE9BQXZCLEVBSG1DO0lBQUEsQ0FBckMsQ0FBQSxDQUFBO0FBQUEsSUFLQSxFQUFBLENBQUcsd0NBQUgsRUFBNkMsU0FBQSxHQUFBO0FBQzNDLFVBQUEsSUFBQTtBQUFBLE1BQUEsSUFBQSxHQUFPLEdBQUksQ0FBQSxjQUFBLENBQVgsQ0FBQTtBQUFBLE1BQ0EsTUFBQSxDQUFPLElBQVAsQ0FBWSxDQUFDLFNBQWIsQ0FBdUIsUUFBdkIsQ0FEQSxDQUFBO0FBQUEsTUFFQSxNQUFBLENBQU8sSUFBUCxDQUFZLENBQUMsU0FBYixDQUF1QixPQUF2QixDQUZBLENBQUE7QUFBQSxNQUdBLE1BQUEsQ0FBTyxJQUFQLENBQVksQ0FBQyxTQUFiLENBQXVCLE1BQXZCLENBSEEsQ0FBQTtBQUFBLE1BSUEsTUFBQSxDQUFPLElBQVAsQ0FBWSxDQUFDLFNBQWIsQ0FBdUIsVUFBdkIsQ0FKQSxDQUFBO2FBS0EsTUFBQSxDQUFPLElBQVAsQ0FBWSxDQUFDLFNBQWIsQ0FBdUIsT0FBdkIsRUFOMkM7SUFBQSxDQUE3QyxDQUxBLENBQUE7QUFBQSxJQWFBLEVBQUEsQ0FBRyx3Q0FBSCxFQUE2QyxTQUFBLEdBQUE7QUFDM0MsVUFBQSxNQUFBO0FBQUEsTUFBQSxNQUFBLEdBQVMsR0FBSSxDQUFBLGNBQUEsQ0FBYixDQUFBO0FBQUEsTUFDQSxNQUFBLENBQU8sTUFBUCxDQUFjLENBQUMsU0FBZixDQUF5QixRQUF6QixDQURBLENBQUE7YUFFQSxNQUFBLENBQU8sTUFBUCxDQUFjLENBQUMsU0FBZixDQUF5QixRQUF6QixFQUgyQztJQUFBLENBQTdDLENBYkEsQ0FBQTtBQUFBLElBa0JBLEVBQUEsQ0FBRyxzQ0FBSCxFQUEyQyxTQUFBLEdBQUE7QUFDekMsVUFBQSxVQUFBO0FBQUEsTUFBQSxVQUFBLEdBQWEsR0FBSSxDQUFBLFlBQUEsQ0FBakIsQ0FBQTtBQUFBLE1BQ0EsTUFBQSxDQUFPLFVBQVAsQ0FBa0IsQ0FBQyxTQUFuQixDQUE2QixNQUE3QixDQURBLENBQUE7QUFBQSxNQUVBLE1BQUEsQ0FBTyxVQUFQLENBQWtCLENBQUMsU0FBbkIsQ0FBNkIsWUFBN0IsQ0FGQSxDQUFBO2FBR0EsTUFBQSxDQUFPLFVBQVAsQ0FBa0IsQ0FBQyxTQUFuQixDQUE2QixLQUE3QixFQUp5QztJQUFBLENBQTNDLENBbEJBLENBQUE7V0F3QkEsRUFBQSxDQUFHLHNDQUFILEVBQTJDLFNBQUEsR0FBQTtBQUN6QyxVQUFBLEVBQUE7QUFBQSxNQUFBLEVBQUEsR0FBSyxHQUFJLENBQUEsWUFBQSxDQUFULENBQUE7QUFBQSxNQUNBLE1BQUEsQ0FBTyxFQUFQLENBQVUsQ0FBQyxTQUFYLENBQXFCLFlBQXJCLENBREEsQ0FBQTtBQUFBLE1BRUEsTUFBQSxDQUFPLEVBQVAsQ0FBVSxDQUFDLFNBQVgsQ0FBcUIsUUFBckIsQ0FGQSxDQUFBO2FBR0EsTUFBQSxDQUFPLEVBQVAsQ0FBVSxDQUFDLFNBQVgsQ0FBcUIsU0FBckIsRUFKeUM7SUFBQSxDQUEzQyxFQXpCYztFQUFBLENBQWhCLENBRkEsQ0FBQTtBQUFBIgp9

//# sourceURL=/Users/dshi/code/dotfiles/atom/atom/packages/dash/spec/grammar-map-spec.coffee
