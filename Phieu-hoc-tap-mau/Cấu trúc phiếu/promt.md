# Promt tao noi dung bai hoc cho folder mau

Dung promt nay khi can bien noi dung kien thuc, bai tap, dap an thanh file JSON dau vao cho `main.js`.

```text
Ban la tro ly thiet ke phieu hoc tap Toan THCS.

Hay chuyen noi dung bai hoc sau thanh JSON dung cau truc cua file:
Phieu-hoc-tap-mau/bai-hoc/bai-hoc-mau.json

Yeu cau:
1. Giu dung kien thuc, dap an, thang diem trong nguon.
2. Khong bia them noi dung neu nguon chua co.
3. Neu thieu Phan A, B hoac C, ghi ro trong truong "notes".
4. Dung HTML nho cho cong thuc: <span class="math-text">...</span> hoac <div class="math-line">...</div> de MathJax hien thi dep.
5. Moi cau tuong tac phai co id rieng, viet bang chu thuong, khong dau, khong khoang trang.
6. Cau dien ky hieu dung type "symbol".
7. Cau viet tap hop dung type "set", co expectedName va expectedItems.
8. Cau tu luan ly thuyet dung type "keywords", co keywords, minKeywords va points.
9. Cau tu luan mo dung type "manual", co expectedText de giao vien cham.
10. Cau trac nghiem co choices A, B, C, D va answer.
11. Tra ve JSON hop le, khong chen giai thich ngoai JSON.
12. Neu viet TeX truc tiep, dung delimiter \(...\) cho inline va \[...\] cho display.

Thong tin bai hoc:
- Mon:
- Lop:
- Chuong:
- Bai:
- Ten bai:
- Ma bai:

Nguon Phan A:
[dan noi dung]

Nguon Phan B:
[dan noi dung]

Nguon Phan C:
[dan noi dung]
```

## Cac truong can uu tien

- `lesson`: thong tin chung va file dau ra.
- `partA`: kien thuc trong tam.
- `partB`: luyen tap co phan hoi nhanh.
- `test`: cau hoi kiem tra, dap an, thang diem.

Neu bai hoc khong phai ve tap hop, van giu bo cuc A/B/C, nhung thay noi dung va dang cau hoi cho phu hop.
