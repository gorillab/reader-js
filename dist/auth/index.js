Object.defineProperty(exports,'__esModule',{value:true});exports.logout=exports.loginByFacebookCallback=exports.loginByFacebook=undefined;var _regenerator=require('babel-runtime/regenerator');var _regenerator2=_interopRequireDefault(_regenerator);var _config=require('../config');var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}var loginByFacebook=exports.loginByFacebook=function(){var _this=this;function _callee(){var response;return _regenerator2['default'].async(function(){function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator2['default'].awrap(fetch(String(_config2['default'])+'/auth/facebook'));case 2:response=_context.sent;return _context.abrupt('return',response);case 4:case'end':return _context.stop();}}}return _callee$}(),null,_this)}return _callee}();var loginByFacebookCallback=exports.loginByFacebookCallback=function(){var _this2=this;function _callee2(){var response;return _regenerator2['default'].async(function(){function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _regenerator2['default'].awrap(fetch(String(_config2['default'])+'/auth/facebook/callback'));case 2:response=_context2.sent;return _context2.abrupt('return',response);case 4:case'end':return _context2.stop();}}}return _callee2$}(),null,_this2)}return _callee2}();var logout=exports.logout=function(){var _this3=this;function _callee3(){var response;return _regenerator2['default'].async(function(){function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return _regenerator2['default'].awrap(fetch(String(_config2['default'])+'/auth/logout',{method:'POST'}));case 2:response=_context3.sent;return _context3.abrupt('return',response);case 4:case'end':return _context3.stop();}}}return _callee3$}(),null,_this3)}return _callee3}();