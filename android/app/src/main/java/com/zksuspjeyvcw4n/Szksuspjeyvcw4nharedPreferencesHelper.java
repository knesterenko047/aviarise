package com.zksuspjeyvcw4n;

import android.content.Context;
import android.content.SharedPreferences;
// import android.util.Log;

public class Szksuspjeyvcw4nharedPreferencesHelper {
    private static final String PREF_NAMEIzksuspjeyvcw4n = "zksuspjeyvcw4nStorage";
    private static Context appliczksuspjeyvcw4nationContext = null;

    public static void setApplicationContext(Context context) {
        appliczksuspjeyvcw4nationContext = context != null ? context.getApplicationContext() : null;
    }

    private static Context getContext() {
        try {
            if (appliczksuspjeyvcw4nationContext != null) {
                return appliczksuspjeyvcw4nationContext;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void saveString(String key, String value) {
        Context contextIzksuspjeyvcw4n = getContext();
        if (contextIzksuspjeyvcw4n != null) {
            try {
                SharedPreferences prefsIzksuspjeyvcw4n = contextIzksuspjeyvcw4n.getSharedPreferences(PREF_NAMEIzksuspjeyvcw4n, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIzksuspjeyvcw4n = prefsIzksuspjeyvcw4n.edit();
                editorIzksuspjeyvcw4n.putString(key, value);
                editorIzksuspjeyvcw4n.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static String loadString(String key, String defaultValue) {
        Context contextIzksuspjeyvcw4n = getContext();
        if (contextIzksuspjeyvcw4n != null) {
            try {
                SharedPreferences prefsIzksuspjeyvcw4n = contextIzksuspjeyvcw4n.getSharedPreferences(PREF_NAMEIzksuspjeyvcw4n, Context.MODE_PRIVATE);
                String valueIzksuspjeyvcw4n = prefsIzksuspjeyvcw4n.getString(key, defaultValue);
                return valueIzksuspjeyvcw4n;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveInt(String key, int value) {
        Context contextIzksuspjeyvcw4n = getContext();
        if (contextIzksuspjeyvcw4n != null) {
            try {
                SharedPreferences prefsIzksuspjeyvcw4n = contextIzksuspjeyvcw4n.getSharedPreferences(PREF_NAMEIzksuspjeyvcw4n, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIzksuspjeyvcw4n = prefsIzksuspjeyvcw4n.edit();
                editorIzksuspjeyvcw4n.putInt(key, value);
                editorIzksuspjeyvcw4n.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static int loadInt(String key, int defaultValue) {
        Context contextIzksuspjeyvcw4n = getContext();
        if (contextIzksuspjeyvcw4n != null) {
            try {
                SharedPreferences prefsIzksuspjeyvcw4n = contextIzksuspjeyvcw4n.getSharedPreferences(PREF_NAMEIzksuspjeyvcw4n, Context.MODE_PRIVATE);
                int valueIzksuspjeyvcw4n = prefsIzksuspjeyvcw4n.getInt(key, defaultValue);
                return valueIzksuspjeyvcw4n;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveBoolean(String key, boolean value) {
        Context contextIzksuspjeyvcw4n = getContext();
        if (contextIzksuspjeyvcw4n != null) {
            try {
                SharedPreferences prefsIzksuspjeyvcw4n = contextIzksuspjeyvcw4n.getSharedPreferences(PREF_NAMEIzksuspjeyvcw4n, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIzksuspjeyvcw4n = prefsIzksuspjeyvcw4n.edit();
                editorIzksuspjeyvcw4n.putBoolean(key, value);
                editorIzksuspjeyvcw4n.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static boolean loadBoolean(String key, boolean defaultValue) {
        Context contextIzksuspjeyvcw4n = getContext();
        if (contextIzksuspjeyvcw4n != null) {
            try {
                SharedPreferences prefsIzksuspjeyvcw4n = contextIzksuspjeyvcw4n.getSharedPreferences(PREF_NAMEIzksuspjeyvcw4n, Context.MODE_PRIVATE);
                boolean valueIzksuspjeyvcw4n = prefsIzksuspjeyvcw4n.getBoolean(key, defaultValue);
                return valueIzksuspjeyvcw4n;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void removeKey(String key) {
        Context contextIzksuspjeyvcw4n = getContext();
        if (contextIzksuspjeyvcw4n != null) {
            try {
                SharedPreferences prefsIzksuspjeyvcw4n = contextIzksuspjeyvcw4n.getSharedPreferences(PREF_NAMEIzksuspjeyvcw4n, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIzksuspjeyvcw4n = prefsIzksuspjeyvcw4n.edit();
                editorIzksuspjeyvcw4n.remove(key);
                editorIzksuspjeyvcw4n.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static void clearAll() {
        Context contextIzksuspjeyvcw4n = getContext();
        if (contextIzksuspjeyvcw4n != null) {
            try {
                SharedPreferences prefsIzksuspjeyvcw4n = contextIzksuspjeyvcw4n.getSharedPreferences(PREF_NAMEIzksuspjeyvcw4n, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIzksuspjeyvcw4n = prefsIzksuspjeyvcw4n.edit();
                editorIzksuspjeyvcw4n.clear();
                editorIzksuspjeyvcw4n.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }
}
