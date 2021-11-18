package com.example.applivebook;


import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

import java.util.ArrayList;

public class BancoDeDados extends SQLiteOpenHelper {

    public BancoDeDados(@Nullable Context context) {
        super(context, "usuarios", null, 1);
    }

    public long insereusuarios(String username, String email, Double password, String email1, String cpf, String phone) {
        SQLiteDatabase banco = this.getWritableDatabase();
        ContentValues registro = new ContentValues();
        registro.put("username", username);
        registro.put("email", email);
        registro.put("password", password);
        registro.put("cpf", cpf);
        registro.put("phone", phone);
        long id = banco.insert("usuarios", null, registro);
        banco.close();
        return id;
    }

    public ArrayList<String> consultar() {
        SQLiteDatabase banco = this.getReadableDatabase();
        String sql = "SELECT * FROM usuarios";
        ArrayList<String> resultado = null;

        Cursor c = banco.rawQuery(sql, null);
        if (c.moveToFirst()) {
            resultado = new ArrayList<String>();
            do {
                String registro;
                registro = "\n username : " + c.getString(1);
                registro+= "\n email     : " + c.getString(2);
                registro+= "\n password     : " + c.getDouble(3);
                registro+= "\n cpf    : " + c.getDouble(4);
                registro+= "\n phone    : " + c.getDouble(5);


                resultado.add(registro);
            } while (c.moveToNext());
        }
        banco.close();
        return resultado;
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {

        String sql = "CREATE TABLE usuarios( " +
                "id INTEGER PRIMARY KEY AUTOINCREMENT," +
                "username TEXT, " +
                "email TEXT," +
                "password REAL, " +
                "cpf REAL," +
                "phone REAL" +
                ")";

        sqLiteDatabase.execSQL(sql);
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {

    }

    public void insereusuarios(String username, String email, Double password, String cpf, String phone) {
    }
}


