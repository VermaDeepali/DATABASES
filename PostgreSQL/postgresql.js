// SELECT

Select * from test;

// COUNT

select COUNT(*) from test where status='ACTIVE';

// JOINS

SELECT COUNT(*) AS active_test_count
FROM test t
JOIN course c ON t.id = c.test_id
WHERE c.status = 'ACTIVE';
