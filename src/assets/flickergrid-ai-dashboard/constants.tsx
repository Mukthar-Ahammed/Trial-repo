
/**
 * A sophisticated geometric diamond/shield SVG encoded in Base64.
 * You can replace this string with any Base64 encoded SVG or a direct image URL.
 */
export const LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAApCAYAAABqUERyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKZSURBVHgB1ZrtcdNAEIZ3dfqIZ/IjdGA6MBVgKiAd4A6ACoAKCBUQOoAKEB2oA1yC/smSIx17MSbKiiR78Tmz98wkipS1Er+3t/d6TwgCum7701pYwvGpiyJ7BgFo2+43AM4FoVUKikDE7xCAptku6TCXxNLfvEhAEX1vv0EQ7Eoa2ffml6JMwPVslpYQgCSBl5I4muLlbIZrNZlg7fADAtA03UpYC0gsvLw+ghKszS4gAPTGXgtD6ywz18JrEaFyaQkH0jTNnA7nklhXhOmrdj+rEMFVaAiCWUojx0VYhQiuQkMAjME3skhXhLNyfyZcHez7YcAzOAI0IvXpaZipIDV0iFCOz0Ui5HlegXIQzTt59PBlfHZLhK7rFn0/HfGTk7TaFxGt0OhKV4WKD+o/Edz6ai1+Tf5TJTabq1d0KEEpvjaZX0t2N2nm9OY/QLT42WR+7e+4m49Sl6URqUHa2+TJ6900oJsIlxZ97GwyiFauvU2eXo96Gvh4gxubzElingZ+3uDGJnNU9RP8eZxN5qjqLPlCc/ytLPL+XkW0meCMHR0WklhukznRitD3ILbJ5A0+3ff7aEWQttBA0KuIsiYcapM5kWbCYTaZE50I1tozqcO9yyZzohNhs9mKeoiOu2zyJA4iw8cm53kq2syJSgRfmwxCohKBmj7iqeCzpRfVEmlMEsQmc0QiIPYLWpvhKTHG1uNeoJ838GsFCkUwn+nGT0yyom+jhqjzBrJ/4iGbzMG23VpQB66LIn0+vuLz0EVRZC/AA5WFkadz216dS5s/j9nSUykCT+dhGDxWBf8tPY0i3PrUt9sOCGuTOepEmKazvIUmtcmT14EyeDofwyZzVIlAWXDJp8IxbDJH9dNrPjvNhzz59gcxYvpH71M0oQAAAABJRU5ErkJggg==";

export const GRID_CONFIG = {
  background: {
    color: "#10b981", // Emerald Green
    maxOpacity: 0.09,
    flickerChance: 0.1,
    squareSize: 3, // Reduced from 4
    gridGap: 2,   // Reduced from 4
  },
  logo: {
    color: "#A6F63B", // Lime Green
    maxOpacity: 0.5,
    flickerChance: 0.3,
    squareSize: 3, // Reduced from 2 - very fine grain
    gridGap: 1,   // Reduced from 2
  },
} as const;
