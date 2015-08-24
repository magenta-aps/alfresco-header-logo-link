Alfresco header logo link
=========================

Alfresco Share module to allow the header logo to link somewhere.

Run `mvn package` and apply the resultant AMP file to Alfresco Share.

By default, the header logo will link to your Share root URL.
You can add the following config section to your `share-config-custom.xml` 
file to customize where the logo links to:

  <config evaluator="string-compare" condition="Logo">
       <!-- Change this to what you want the header logo to link to -->
      <href>http://www.google.com/</href>
   </config>

Tested with: Alfresco 5.0.c

Copyright
==========
    Alfresco Share Header Logo Link
    Copyright (C) 2015 Magenta ApS

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.