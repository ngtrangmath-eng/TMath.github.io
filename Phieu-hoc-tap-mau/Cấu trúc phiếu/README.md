# Folder phieu hoc tap mau

Folder nay la bo khung dung de tao nhanh phieu hoc tap HTML tu noi dung bai hoc. Ban chi can sua file du lieu trong `bai-hoc/`, sau do chay `main.js` de sinh ra mot phieu hoc tap hoan chinh theo dung bo cuc mau.

## Cau truc

```text
Phieu-hoc-tap-mau/
├─ README.md              Huong dan dung nhanh
├─ bo-cuc.md              Mo ta bo cuc bat buoc cua phieu
├─ cau-truc-json.md       Giai thich cac truong du lieu bai hoc
├─ lenh.md                Cac lenh tao phieu
├─ promt.md               Prompt de bien noi dung kien thuc thanh JSON
├─ template.html          Khung HTML/CSS/JS dung chung
├─ main.js                Chuong trinh sinh HTML
├─ bai-hoc/
│  ├─ bai-hoc-mau.json    Noi dung mau da chay duoc
│  └─ bai-hoc-trong.json  Khung trong de nhan ban cho bai moi
└─ output/                Noi luu HTML da sinh
```

## Dung nhanh

Chay tu goc du an:

```bash
node Phieu-hoc-tap-mau/main.js
```

Lenh tren doc `Phieu-hoc-tap-mau/bai-hoc/bai-hoc-mau.json` va tao file HTML trong `Phieu-hoc-tap-mau/output/`.

Neu co file bai hoc rieng:

```bash
node Phieu-hoc-tap-mau/main.js Phieu-hoc-tap-mau/bai-hoc/ten-bai.json
```

Neu muon chi dinh file dau ra:

```bash
node Phieu-hoc-tap-mau/main.js Phieu-hoc-tap-mau/bai-hoc/ten-bai.json "Toan 6/Toan6-Chuong1/Toan6-Chuong1-Bai8/Toan6-Chuong1-Bai8.html"
```

## Tao bai moi

1. Nhan ban `bai-hoc/bai-hoc-mau.json`.
   Neu muon bat dau tu khung trong, nhan ban `bai-hoc/bai-hoc-trong.json`.
2. Sua thong tin trong `lesson`: tieu de, mon, lop, chuong, bai, ma bai, file dau ra.
3. Thay noi dung `partA`, `partB`, `test` bang kien thuc cua bai moi.
4. Chay `node Phieu-hoc-tap-mau/main.js duong-dan-file-json`.
5. Mo file HTML duoc tao trong trinh duyet de kiem tra.

## Quy uoc

- Noi dung co the dung HTML nho nhu `<span class="math-text">...</span>` hoac `<div class="math-line">...</div>` de MathJax hien thi cong thuc.
- Neu viet TeX truc tiep, dung `\(...\)` cho cong thuc inline va `\[...\]` cho cong thuc rieng dong.
- Moi cau tuong tac can co `id` rieng, khong trung nhau.
- Cau viet tap hop dung `expectedName` va `expectedItems` de script tu cham.
- Cau tu luan ly thuyet co the dung `type: "keywords"` va `keywords` de cham theo y chinh.
- Cau mo co the dung `type: "manual"` de giao vien tu cham.
- Cau trac nghiem dung `answer` de script tu cham.
- Tong diem mac dinh la tong diem trac nghiem va tu luan trong `test`.
