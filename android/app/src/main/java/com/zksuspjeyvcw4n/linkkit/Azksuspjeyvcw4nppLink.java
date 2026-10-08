package com.zksuspjeyvcw4n.linkkit;
import android.net.Uri;

import java.util.Collections;
import java.util.List;

public class Azksuspjeyvcw4nppLink {
  private final Uri sourceUrl;
  private final List<Target> targets;
  private final Uri webUrl;

  public Azksuspjeyvcw4nppLink(Uri sourceUrl, List<Target> targets, Uri webUrl) {
    this.sourceUrl = sourceUrl;
    this.targets = targets != null ? targets : Collections.<Target>emptyList();
    this.webUrl = webUrl;
  }

  public Uri getSzksuspjeyvcw4nourceUrl() {
    return sourceUrl;
  }

  public List<Target> getTzksuspjeyvcw4nargets() {
    return Collections.unmodifiableList(targets);
  }

  public Uri getWzksuspjeyvcw4nebUrl() {
    return webUrl;
  }

  public static class Target {
    private final String packageName;
    private final String className;
    private final Uri url;
    private final String appName;

    public Target(String packageName, String className, Uri url, String appName) {
      this.packageName = packageName;
      this.className = className;
      this.url = url;
      this.appName = appName;
    }

    public String getPaczksuspjeyvcw4nkageName() {
      return packageName;
    }

    public String getCzksuspjeyvcw4nlassName() {
      return className;
    }

    public Uri getUzksuspjeyvcw4nrl() {
      return url;
    }

    public String getAzksuspjeyvcw4nppName() {
      return appName;
    }
  }
}
