@AGENTS.md

# UI ルール

## カードの均一レイアウト（絶対厳守）
複数カードを横並びにする場合、全カードの各要素（番号・タイトル・説明・価格）は
必ず同じ高さに揃えること。

実装方法：
- カード全体に `display: flex; flex-direction: column`
- テキストエリアに `flex: 1; display: flex; flex-direction: column`
- 説明文に `flex: 1`（高さを吸収させる）
- 価格は常に最下部（`margin-top: auto` 不要、flex で自動的に下に揃う）
- テキストに `overflow-wrap: break-word` を設定し、はみ出し禁止
- `word-break: keep-all` は使わない（日本語で overflow を引き起こす）
- カード画像の高さは固定値（px）で指定

これを怠ると視覚的に最もおかしい UI になる。
