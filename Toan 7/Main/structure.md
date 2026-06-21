# Cấu trúc thư mục chuẩn

```text
Toan 7/
├─ Main/
│  ├─ README.md
│  ├─ agent_rules.md
│  ├─ command_schema.md
│  ├─ curriculum.md
│  ├─ lesson.md
│  ├─ promt.md
│  └─ structure.md
├─ templates/
│  ├─ base_prompt.md
│  ├─ html_structure.md
│  ├─ lesson_template.md
│  ├─ source_file_convention.md
│  └─ style_guide.md
└─ Toan7-Chuong{CHUONG}/
   └─ Toan7-Chuong{CHUONG}-Bai{BAI}/
      ├─ lesson.md
      ├─ Bai{BAI}-PhanA.md
      ├─ Bai{BAI}-PhanB.md
      ├─ Bai{BAI}-PhanC.md
      └─ Toan7-Chuong{CHUONG}-Bai{BAI}.html
```

## Vai trò các nhóm file

- `Main/`: hướng dẫn tổng thể cho agent và mục lục các phiếu học tập.
- `templates/`: khung `lesson.md`, cấu trúc HTML, quy ước file nguồn và quy tắc trình bày.
- `lesson.md` trong từng thư mục bài học: bản mô tả chi tiết 8 mục cho bài đó.
- `Bai{BAI}-PhanA.md`: nội dung phần A - Kiến thức trọng tâm.
- `Bai{BAI}-PhanB.md`: nội dung phần B - Luyện tập.
- `Bai{BAI}-PhanC.md`: nội dung phần C - Kiểm tra đánh giá.
- File `.html`: phiếu học tập tương tác đã hoàn thành.

## Cách nhân bản cho từng phiếu

1. Tạo thư mục mới theo bài học, ví dụ `Toan7-Chuong1-Bai5`.
2. Sao chép `templates/lesson_template.md` thành `lesson.md` trong thư mục mới.
3. Điền đủ thông tin trong `lesson.md`, đặc biệt là tên bài, chủ đề, mục tiêu, tên 3 file nguồn và file HTML đầu ra.
4. Tạo 3 file `Bai5-PhanA.md`, `Bai5-PhanB.md`, `Bai5-PhanC.md`.
5. Điền nội dung thật cho A, B, C.
6. Chạy lệnh `Hoàn thành phiếu học tập Toan7-Chuong1-Bai5`.

## Biến thể cho bài ôn tập chương

Với bài ôn tập, có thể dùng cấu trúc:

```text
Toan7-Chuong{CHUONG}-Ontap/
├─ lesson.md
├─ OnTapChuong{CHUONG}-PhanA.md
├─ OnTapChuong{CHUONG}-PhanB.md
├─ OnTapChuong{CHUONG}-PhanC.md
└─ Toan7-Chuong{CHUONG}-OnTap.html
```

Các phần A, B, C vẫn giữ vai trò: hệ thống kiến thức, luyện tập tổng hợp, kiểm tra đánh giá.
