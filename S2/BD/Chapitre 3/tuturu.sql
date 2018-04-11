/*
______________________BASES DE DONNÉES____________________
_________________Exercices série n°3 PL/SQL_________________

->Écrire les blocs PL/SQL suivants :
->Vous utiliserez la base de donnée fournie en exemple par ORACLE (par copie des tables EMP et DEPT du schéma SCOTT).
*/

--Avant de commencer on initialise les tables pour la série :
--Suppression des (éventuelles) tables emp et dept:
DROP TABLE emp;
DROP TABLE dept;
--Copie des bonnes tables depuis le schéma SCOTT :
CREATE TABLE emp AS SELECT * FROM SCOTT.emp;
CREATE TABLE dept AS SELECT * FROM SCOTT.dept;

/*
Exercice 1 :
Écrire un bloc PL/SQL permettant d'obtenir le nombre total d'employés.
Afficher cette valeur en utilisant la procédure PUT_LINE du package DBMS_OUTPUT.
*/
--On active la sortie d'écran :
SET SERVEROUTPUT ON
DECLARE
    v_count_empno NUMBER(2); -->Variable de résultat
BEGIN
    --Début du SELECT
    SELECT COUNT(empno) -->SELECT comme en SQL
    INTO v_count_empno -->On précise que le résultat sera mis dans la variable
    FROM emp; -->Comme en SQL, et on termine par ";" car c'est la fin du SELECT
    DBMS_OUTPUT.PUT_LINE('Nombre total d''employés : ' || v_count_empno); -->Affichage du résultat
END;
    
/*
Exercice 2 : Pour un employé donné (numéro saisi au clavier) :
a) Calculer la moyenne des salaires des employés ayant le même travail.
b) Mettre à jour le salaire de cet employé :
-le mettre égal à la moyenne des salaires si son salaire est inférieur à cette moyenne,
-le majorer dans les autres cas.
c) Fournir une solution SQL pour b)
*/
--On active la sortie d'écran :
SET SERVEROUTPUT ON
/*a)*/
ACCEPT p_empno PROMPT 'Entrez le numéro de l''employé : '
DECLARE
    v_moy_sal emp.sal%TYPE;
BEGIN
    SELECT AVG(sal)
    INTO v_moy_sal
    FROM emp
    WHERE job = (
        SELECT job
        FROM emp
        WHERE empno = &p_empno);
    DBMS_OUTPUT.PUT_LINE('Moyenne des salaires des employés ayant le même travail : ' || v_moy_sal);
END;

/*b)*/
ACCEPT p_empno PROMPT 'Entrez le numéro de l''employé : '
DECLARE
    v_moy_sal emp.sal%TYPE;
    v_sal emp.sal%TYPE;
BEGIN
    SELECT AVG(sal)
    INTO v_moy_sal
    FROM emp
    WHERE job = (
        SELECT job
        FROM emp
        --Pas de INTO car la variable n'a pas besoin d'être sauvegardée?
        WHERE empno = &p_empno);
    
    SELECT sal
    INTO v_sal
    FROM emp
    WHERE empno = &p_empno;
    
    IF v_sal < v_moy_sal
    THEN
        v_sal := v_moy_sal;
    ELSE
        v_sal := v_sal * 1.1;
    END IF;
    --Mise à jour de la valeur du salaire dans la variable
    
    UPDATE emp
    SET sal = v_moy_sal
    WHERE empno = &p_empno;
    COMMIT;
    --Mise à jour de la valeur du salaire dans la table
END;




























































































