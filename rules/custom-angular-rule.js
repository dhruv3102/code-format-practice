module.exports = {
  meta: {
      type: "suggestion",
      docs: {
          description: "Description of the rule",
      },
      fixable: "code",
      schema: []
  },
  create: function(context) {
      return {
        FunctionDeclaration(node) {
            let comments = context.getSourceCode().getCommentsInside(node);
            if((comments.length == 0)) {
              context.report({node, message: 'Method must consist atleast one Comment'});
            }
          },
          FunctionExpression(node) {
            let comments = context.getSourceCode().getCommentsInside(node);
            if((comments.length == 0)) {
              context.report({node, message: 'Method must consist atleast one Comment'});
            }
          }
      };
  }
};