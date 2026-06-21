# Cau truc JSON bai hoc

File JSON trong `bai-hoc/` la noi dung dau vao cho `main.js`. Khi tao bai moi, nen nhan ban `bai-hoc-trong.json`, sau do thay cac dong `TODO`.

## lesson

Thong tin chung cua phieu:

- `code`: ma bai, dung lam ma luu ket qua.
- `output`: duong dan file HTML dau ra, tinh tu folder `Phieu-hoc-tap-mau/` neu khong truyen tham so thu hai.
- `title`: tieu de lon.
- `summary`: mo ta ngan o dau phieu.
- `meta`: bang thong tin Mon, Lop, Chuong, Bai, Ma bai.
- `sources`: cac tep nguon noi dung.

## partA

Phan kien thuc trong tam:

- `lead`: gioi thieu ngan.
- `blocks`: cac khoi kien thuc, moi khoi co `title`, `paragraphs`, `items`.
- `note`: hop ghi nho.
- `symbolTable`: bang ki hieu/cong thuc.
- `example`: vi du mau, co the viet HTML.
- `mindMap`: cac nut so do tu duy mini.
- `quickChecks`: cau tu kiem tra nhanh.
- `mistakes`: loi thuong gap.

## partB

Phan luyen tap:

- `referenceTable`: bang nhac lai kien thuc.
- `symbolGroup`: nhom cau dien ki hieu.
- `setQuestions`: cau viet tap hop, script tu kiem tra.
- `checkboxGame`: cau chon nhieu dap an.
- `challenge`: cau van dung ngan.
- `tips`: meo lam bai.

## test

Phan kiem tra danh gia:

- `durationMinutes`: thoi gian lam bai.
- `totalPoints`: tong diem.
- `rubric`: bang cau truc diem.
- `multipleChoice`: cau trac nghiem.
- `written`: cau tu luan/van dung.

## Kieu cau hoi

### Dien ki hieu

```json
{
  "type": "symbol",
  "id": "a-check-1",
  "title": "Cau 1. Dien ki hieu",
  "prompt": "<span class='math-text'>3 ... A</span>",
  "answer": "∈",
  "explain": "Vi 3 thuoc A."
}
```

### Viet tap hop

```json
{
  "type": "set",
  "id": "w1",
  "title": "Viet tap hop A gom cac so tu nhien nho hon 5.",
  "expectedName": "A",
  "expectedItems": ["0", "1", "2", "3", "4"],
  "points": 2
}
```

### Tu luan theo tu khoa

Dung cho cau hoi ly thuyet hoac giai thich ngan.

```json
{
  "type": "keywords",
  "id": "w2",
  "title": "Neu quy tac thuc hien phep tinh.",
  "keywords": ["ngoac", "luy thua", "nhan chia", "cong tru"],
  "minKeywords": 3,
  "points": 2,
  "expectedText": "Can neu duoc thu tu: ngoac, luy thua, nhan chia, cong tru."
}
```

### Tu luan giao vien cham

Dung khi cau hoi mo, script khong tu cham diem.

```json
{
  "type": "manual",
  "id": "w3",
  "title": "Giai bai toan van dung.",
  "points": 2,
  "expectedText": "Giao vien cham theo loi giai va ket qua."
}
```

## Luu y

- `id` khong trung nhau trong cung mot phieu.
- Cong thuc nen boc bang `<span class='math-text'>...</span>` hoac dong rieng bang `<div class='math-line'>...</div>` de MathJax hien thi dep.
- Neu viet TeX truc tiep, dung delimiter `\(...\)` cho inline va `\[...\]` cho display.
- Noi dung co HTML nho duoc giu nguyen trong file dau ra.
- Neu khong co `output`, file se duoc tao trong `Phieu-hoc-tap-mau/output/`.
