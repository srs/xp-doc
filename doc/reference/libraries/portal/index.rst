.. _libs-portal:

lib-portal
==========

This library implements JavaScript bindings for portal related functions
Add the following into your ``build.gradle`` file in the
``dependencies`` section::

  include 'com.enonic.xp:lib-portal:6.1.0'

To use this library in your JavaScript files, you can require the library
like this::

  var portal = require('/lib/xp/portal')

The methods implemented in this library are listed below.

.. toctree::
   :maxdepth: 1

   api/assetUrl
   api/attachmentUrl
   api/componentUrl
   api/imageUrl
   api/pageUrl
   api/serviceUrl
   api/processHtml
   api/getComponent
   api/getContent
   api/getSite
   api/getSiteConfig
