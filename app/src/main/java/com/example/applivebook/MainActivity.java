package com.example.applivebook;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WebView w = findViewById(R.id.webview);
        w.setWebViewClient(new WebViewClient());
        w.setWebChromeClient(new WebChromeClient());


        //habilitando a execução de javascript
        WebSettings conf = w.getSettings();
        conf.setJavaScriptEnabled(true);

        w.addJavascriptInterface(new Ponte(this), "Chamada");

        w.loadUrl("file:///android_asset/Login.html");
    }

    public class Ponte {
        Context contexto;


        public Ponte(Context contexto) {
            this.contexto = contexto;
        }

        @JavascriptInterface
        public void envia(String username, Double password, String email, String cpf, String phone )  {

            try {
                BancoDeDados bd = new BancoDeDados(this.contexto);
                bd.insereusuarios(username, email, password, cpf, phone);
                Toast.makeText(this.contexto, "Conta salvada", Toast.LENGTH_SHORT).show();
            } catch (Exception ex) {
                Toast.makeText(this.contexto, "Erro na criação:"+ex.toString(), Toast.LENGTH_SHORT).show();
            }
        }
        public String result;

        @JavascriptInterface
        public void consultar() {
            BancoDeDados bd = new BancoDeDados(this.contexto);
            ArrayList<String> resultado =  bd.consultar();
            String mensagem = "";
            for (int i=0; i< resultado.size(); i++) {
                mensagem += resultado.get(i);
            }
            result = mensagem;

        }

        @JavascriptInterface
        public String getResult() {
            consultar();
            return result;
        }
    }
}