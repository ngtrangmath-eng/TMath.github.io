# Quy ước file nguồn

Quy ước này giúp agent nhận diện nhanh vai trò của từng file trong thư mục bài học.

## Tên file chuẩn

```text
Bai{BAI}-PhanA.md  Phần A - Kiến thức trọng tâm
Bai{BAI}-PhanB.md  Phần B - Luyện tập
Bai{BAI}-PhanC.md  Phần C - Kiểm tra đánh giá
```

Trong đó `{BAI}` là số bài.

Ví dụ:

```text
Bai1-PhanA.md
Bai1-PhanB.md
Bai1-PhanC.md
```

Với bài ôn tập chương:

```text
OnTapChuong{CHUONG}-PhanA.md
OnTapChuong{CHUONG}-PhanB.md
OnTapChuong{CHUONG}-PhanC.md
```

## Nếu tên file không chuẩn

Agent phải đọc:

1. tiêu đề cấp 1;
2. các tiêu đề cấp 2;
3. các từ khóa như "Kiến thức trọng tâm", "Luyện tập", "Kiểm tra đánh giá", "Thang điểm", "Đáp án".

Sau đó tự gán file vào phần A, B hoặc C.

## Nội dung nên có

- Phần A: mục tiêu, ghi nhớ, ví dụ, lỗi thường gặp.
- Phần B: câu hỏi luyện tập, có thể kèm đáp án gợi ý và lưu ý khi học sinh sai trong file nguồn; khi dựng HTML, không hiển thị các đáp án/gợi ý này trên trang luyện tập.
- Phần C: câu hỏi kiểm tra, thang điểm, đáp án, hướng dẫn chấm.

## Khung chi tiết từng phần

### Phần A - Kiến thức trọng tâm

Nên có các mục theo thứ tự:

1. Giới thiệu bài học.
2. Mục tiêu bài học.
3. Ghi nhớ cốt lõi.
4. Kĩ năng giải toán hoặc quy tắc cần dùng.
5. Ví dụ mẫu có hướng dẫn.
6. Sơ đồ tư duy mini nếu phù hợp.
7. Tự kiểm tra nhanh.
8. Lỗi thường gặp.

### Phần B - Luyện tập

Nên có các mục theo thứ tự:

1. Hướng dẫn làm bài.
2. Các bài luyện tập theo từng dạng toán.
3. Yêu cầu trình bày lời giải hoặc điền đáp án.
4. Gợi ý nếu cần trong file nguồn, nhưng không render trên trang luyện tập.
5. Đáp án gợi ý hoặc hướng dẫn giải trong file nguồn, nhưng không render trên trang luyện tập.

### Phần C - Kiểm tra đánh giá

Nên có các mục theo thứ tự:

1. Giới thiệu bài kiểm tra.
2. Thang điểm 10 điểm.
3. Thời gian làm bài nếu có.
4. Thông tin học sinh nếu cần.
5. Trắc nghiệm.
6. Tự luận và vận dụng.
7. Đáp án.
8. Hướng dẫn chấm.
9. Nhận xét kết quả theo mức điểm.
