(function() {
  describe('BottomPanel', function() {
    var BottomPanel, bottomPanel, getMessage, linter;
    BottomPanel = require('../../lib/ui/bottom-panel');
    linter = null;
    bottomPanel = null;
    beforeEach(function() {
      return waitsForPromise(function() {
        return atom.packages.activatePackage('linter').then(function() {
          linter = atom.packages.getActivePackage('linter').mainModule.instance;
          if (bottomPanel != null) {
            bottomPanel.dispose();
          }
          bottomPanel = new BottomPanel('File');
          return atom.workspace.open(__dirname + '/fixtures/file.txt');
        });
      });
    });
    getMessage = require('../common').getMessage;
    it('is not visible when there are no errors', function() {
      return expect(linter.views.bottomPanel.getVisibility()).toBe(false);
    });
    it('hides on config change', function() {
      linter.views.bottomPanel.scope = 'Project';
      linter.views.bottomPanel.setMessages({
        added: [getMessage('Error')],
        removed: []
      });
      expect(linter.views.bottomPanel.getVisibility()).toBe(true);
      atom.config.set('linter.showErrorPanel', false);
      expect(linter.views.bottomPanel.getVisibility()).toBe(false);
      atom.config.set('linter.showErrorPanel', true);
      return expect(linter.views.bottomPanel.getVisibility()).toBe(true);
    });
    return describe('{set, remove}Messages', function() {
      return it('works as expected', function() {
        var messages;
        bottomPanel.scope = 'Project';
        messages = [getMessage('Error'), getMessage('Warning')];
        bottomPanel.setMessages({
          added: messages,
          removed: []
        });
        expect(bottomPanel.messagesElement.childNodes.length).toBe(1);
        expect(bottomPanel.messagesElement.childNodes[0].childNodes.length).toBe(2);
        bottomPanel.setMessages({
          added: [],
          removed: messages
        });
        expect(bottomPanel.messagesElement.childNodes.length).toBe(1);
        expect(bottomPanel.messagesElement.childNodes[0].childNodes.length).toBe(0);
        bottomPanel.setMessages({
          added: messages,
          removed: []
        });
        expect(bottomPanel.messagesElement.childNodes[0].childNodes.length).toBe(2);
        bottomPanel.removeMessages(messages);
        expect(bottomPanel.messagesElement.childNodes.length).toBe(1);
        return expect(bottomPanel.messagesElement.childNodes[0].childNodes.length).toBe(0);
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL1VzZXJzL2RzaGkvY29kZS9kb3RmaWxlcy9hdG9tL2F0b20vcGFja2FnZXMvbGludGVyL3NwZWMvdWkvYm90dG9tLXBhbmVsLXNwZWMuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxFQUFBLFFBQUEsQ0FBUyxhQUFULEVBQXdCLFNBQUEsR0FBQTtBQUN0QixRQUFBLDRDQUFBO0FBQUEsSUFBQSxXQUFBLEdBQWMsT0FBQSxDQUFRLDJCQUFSLENBQWQsQ0FBQTtBQUFBLElBQ0EsTUFBQSxHQUFTLElBRFQsQ0FBQTtBQUFBLElBRUEsV0FBQSxHQUFjLElBRmQsQ0FBQTtBQUFBLElBR0EsVUFBQSxDQUFXLFNBQUEsR0FBQTthQUNULGVBQUEsQ0FBZ0IsU0FBQSxHQUFBO2VBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFkLENBQThCLFFBQTlCLENBQXVDLENBQUMsSUFBeEMsQ0FBNkMsU0FBQSxHQUFBO0FBQzNDLFVBQUEsTUFBQSxHQUFTLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWQsQ0FBK0IsUUFBL0IsQ0FBd0MsQ0FBQyxVQUFVLENBQUMsUUFBN0QsQ0FBQTs7WUFDQSxXQUFXLENBQUUsT0FBYixDQUFBO1dBREE7QUFBQSxVQUVBLFdBQUEsR0FBa0IsSUFBQSxXQUFBLENBQVksTUFBWixDQUZsQixDQUFBO2lCQUdBLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBZixDQUFvQixTQUFBLEdBQVksb0JBQWhDLEVBSjJDO1FBQUEsQ0FBN0MsRUFEYztNQUFBLENBQWhCLEVBRFM7SUFBQSxDQUFYLENBSEEsQ0FBQTtBQUFBLElBV0MsYUFBYyxPQUFBLENBQVEsV0FBUixFQUFkLFVBWEQsQ0FBQTtBQUFBLElBYUEsRUFBQSxDQUFHLHlDQUFILEVBQThDLFNBQUEsR0FBQTthQUM1QyxNQUFBLENBQU8sTUFBTSxDQUFDLEtBQUssQ0FB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

//# sourceURL=/Users/dshi/code/dotfiles/atom/atom/packages/linter/spec/ui/bottom-panel-spec.coffee