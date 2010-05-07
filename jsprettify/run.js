// Copyright 2010 Steven Dee. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('jsprettify.run');

goog.require('goog.events');
goog.require('jsprettify.prettify');
// XXX the following are needed to prevent type warnings in Closure compiler.
goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventHandler');

/**
 * Runner for jsprettify. Runs elements marked with class "prettify" through
 * prettifyHtml on document load.
 */
jsprettify.run = function() {
  goog.events.listen(window, goog.events.EventType.LOAD,
      function() {
        jsprettify.prettify();
      });
};

window['jsprettify'] = window['jsprettify'] || {};
window['jsprettify']['run'] = jsprettify.run;