# Quy ước câu lệnh

Tệp này giúp agent hiểu các câu lệnh tự nhiên khi làm việc với phiếu học tập.

## Câu lệnh hoàn thành phiếu

```text
Hoàn thành phiếu học tập [Tên thư mục]
```

Ý nghĩa:

- `[Tên thư mục]` là thư mục bài học cần xử lý.
- Agent phải đọc nội dung trong thư mục đó.
- Agent phải tạo hoặc cập nhật phiếu học tập với đủ 3 phần A, B, C.

## Các cách nói tương đương

```text
Tạo phiếu học tập [Tên thư mục]
```

```text
Hoàn thiện phiếu học tập [Tên thư mục]
```

```text
Làm phiếu học tập cho [Tên thư mục]
```

```text
Cập nhật phiếu học tập [Tên thư mục]
```

```text
Xuất HTML cho [Tên thư mục]
```

## Câu lệnh tạo khung bài sau

```text
Tạo khung phiếu học tập [Tên thư mục]
```

Các cách nói tương đương:

```text
Cấu trúc bài mới [Tên thư mục]
```

```text
Tạo lesson.md cho [Tên thư mục]
```

```text
Chuẩn bị khung bài [Tên thư mục]
```

Ý nghĩa:

- Agent tạo `lesson.md` theo đúng `templates/lesson_template.md`.
- Agent tạo hoặc liệt kê 3 file nguồn cần có: `Bai{BAI}-PhanA.md`, `Bai{BAI}-PhanB.md`, `Bai{BAI}-PhanC.md`.
- Nếu thông tin bài học chưa đủ để điền mục tiêu hoặc chủ đề, giữ placeholder rõ ràng thay vì tự bịa.

## Cách xác định thư mục

1. Nếu người dùng đưa tên thư mục đầy đủ, dùng đúng tên đó.
2. Nếu người dùng nói bằng mô tả tự nhiên như "toán 7 chương 1 bài 1", tra `curriculum.md`.
3. Nếu không tìm được thư mục, hỏi lại thay vì đoán.

## Loại sản phẩm mặc định

Nếu người dùng chỉ nói "phiếu học tập", sản phẩm mặc định là phiếu học tập tương tác gồm:

1. Phần A - Kiến thức trọng tâm.
2. Phần B - Luyện tập.
3. Phần C - Kiểm tra đánh giá.
4. Phần kết quả hoặc hướng dẫn chấm nếu file nguồn có đáp án.
