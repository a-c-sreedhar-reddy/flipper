---
id: shared-preferences-plugin
title: Shared Preferences Setup
sidebar_label: Shared Preferences
---

This plugin is available for both Android and iOS.

## Android

```java
import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin;

client.addPlugin(
    new SharedPreferencesFlipperPlugin(context, "my_shared_preference_file"));
```

## iOS


<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->
```objc
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>

[client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:@"your_suitename"]];
```
<!--Swift-->
```swift
import FlipperKit

client?.add(FKUserDefaultsPlugin.init(suiteName: "your_suitename"))
```
<!--END_DOCUSAURUS_CODE_TABS-->