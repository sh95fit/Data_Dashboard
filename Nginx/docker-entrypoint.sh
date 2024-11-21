#!/bin/sh
fail2ban-server start || echo "fail2ban is not running or failed to start"
/usr/local/nginx/sbin/nginx -g "daemon off;" "$@"